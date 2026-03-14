<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");


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


    /* ========= POST ========= */

    $title = $_POST["name"] ?? "";
    $category = $_POST["category"] ?? "";
    $rooms = $_POST["rooms"] ?? 0;

   
    $available = $_POST["available"] ?? 0;

    $gender = $_POST["gender"] ?? "";
    $description = $_POST["description"] ?? "";

    $price = $_POST["price"] ?? 0;
    $address = $_POST["address"] ?? "";

    $lat = $_POST["lat"] ?? 0;
    $lng = $_POST["lng"] ?? 0;

    $wifi = $_POST["wifi"] ?? 0;
    $aircon = $_POST["aircon"] ?? 0;
    $own_cr = $_POST["cr"] ?? 0;
    $parking = $_POST["parking"] ?? 0;

    $contact = $_POST["contact"] ?? "";
    $email = $_POST["email"] ?? "";

    $availability = "available";
    $status = "pending";


    /* ========= INSERT LISTING ========= */

    $sql = "INSERT INTO listings (

        landlord_id,
        title,
        category,
        rooms,
      
        available_slots,
        gender,
        description,
        price,
        address,
        latitude,
        longitude,
        wifi,
        aircon,
        own_cr,
        parking,
        contact,
        email,
        availability,
        status

    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";


    $stmt = $pdo->prepare($sql);

    $stmt->execute([

        $landlord_id,
        $title,
        $category,
        $rooms,
        $available,
        $gender,
        $description,
        $price,
        $address,
        $lat,
        $lng,
        $wifi,
        $aircon,
        $own_cr,
        $parking,
        $contact,
        $email,
        $availability,
        $status

    ]);


    /* ========= GET LISTING ID ========= */

    $listing_id = $pdo->lastInsertId();


    /* ========= UPLOAD IMAGES ========= */

    $uploadDir = __DIR__ . "/uploads/";

    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }


    if (!empty($_FILES["images"]["name"][0])) {

        foreach ($_FILES["images"]["name"] as $key => $name) {

            $tmp = $_FILES["images"]["tmp_name"][$key];

            $fileName = time() . "_" . $name;

            move_uploaded_file(
                $tmp,
                $uploadDir . $fileName
            );


            $stmtImg = $pdo->prepare(
                "INSERT INTO listing_images (listing_id, image)
                 VALUES (?, ?)"
            );

            $stmtImg->execute([
                $listing_id,
                $fileName
            ]);
        }
    }


    echo json_encode([
        "status" => "success"
    ]);


} catch (Throwable $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);

}