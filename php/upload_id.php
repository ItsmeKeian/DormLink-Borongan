<?php

session_start();

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require "db.php";


if (!isset($_SESSION["user"])) {

    echo json_encode([
        "status" => "error",
        "message" => "Not logged in"
    ]);
    exit;
}


$user_id = $_SESSION["user"]["id"];


if (!isset($_FILES["id_image"])) {

    echo json_encode([
        "status" => "error",
        "message" => "No file"
    ]);
    exit;
}


$id_type = $_POST["id_type"] ?? "student";


$file = $_FILES["id_image"];

$filename = time() . "_" . $file["name"];

$path = "../uploads/" . $filename;


if (!move_uploaded_file($file["tmp_name"], $path)) {

    echo json_encode([
        "status" => "error",
        "message" => "Upload failed"
    ]);
    exit;
}


try {

    $stmt = $pdo->prepare(

        "UPDATE users
         SET valid_id_image = ?,
             id_type = ?,
             verification_status = 'pending'
         WHERE id = ?"

    );

    $stmt->execute([
        $filename,
        $id_type,
        $user_id
    ]);


    echo json_encode([
        "status" => "success",
        "message" => "ID uploaded. Wait for approval."
    ]);

} catch (PDOException $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}