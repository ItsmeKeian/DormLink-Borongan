<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => false,
    'httponly' => false,
    'samesite' => 'Lax'
]);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require_once "dbconnect.php";


try {

    if (!isset($_SESSION["user_id"])) {
        echo json_encode([
            "status" => "error",
            "message" => "not logged in"
        ]);
        exit;
    }

    $landlord_id = $_SESSION["user_id"];


    $title = $_POST["name"] ?? "";
    $category = $_POST["category"] ?? "";
    $price = $_POST["price"] ?? 0;
    $rooms = $_POST["rooms"] ?? 0;

    $slots = $_POST["slots"] ?? 0;
    $available = $_POST["available"] ?? 0;
    $gender = $_POST["gender"] ?? "";

    $contact = $_POST["contact"] ?? "";
    $email = $_POST["email"] ?? "";

    $address = $_POST["address"] ?? "";
    $lat = $_POST["lat"] ?? 0;
    $lng = $_POST["lng"] ?? 0;

    $description = $_POST["description"] ?? "";

    $wifi = $_POST["wifi"] ?? 0;
    $aircon = $_POST["aircon"] ?? 0;
    $own_cr = $_POST["cr"] ?? 0;
    $parking = $_POST["parking"] ?? 0;

    $status = "pending";
    $availability = "available";


    // ===== IMAGE =====

    $imageName = "";

    if (!empty($_FILES["image"]["name"])) {

        if (!is_dir("uploads")) {
            mkdir("uploads");
        }

        $imageName = time() . "_" . $_FILES["image"]["name"];

        move_uploaded_file(
            $_FILES["image"]["tmp_name"],
            "uploads/" . $imageName
        );
    }


    $sql = "INSERT INTO listings (
        landlord_id,
        title,
        category,
        rooms,
        total_slots,
        available_slots,
        gender,
        description,
        price,
        address,
        latitude,
        longitude,
        image,
        wifi,
        aircon,
        own_cr,
        parking,
        contact,
        email,
        availability,
        status
    ) VALUES (
        ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
    )";


    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        $landlord_id,
        $title,
        $category,
        $rooms,
        $slots,
        $available,
        $gender,
        $description,
        $price,
        $address,
        $lat,
        $lng,
        $imageName,
        $wifi,
        $aircon,
        $own_cr,
        $parking,
        $contact,
        $email,
        $availability,
        $status
    ]);


    echo json_encode([
        "status" => "success"
    ]);


} catch (Throwable $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);

}