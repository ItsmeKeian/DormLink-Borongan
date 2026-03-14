<?php

session_start();
require "dbconnect.php";

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");


try {

    if (!isset($_POST["id"])) {
        echo json_encode([
            "status" => "error",
            "message" => "No ID"
        ]);
        exit;
    }

    $id = $_POST["id"];


    // delete images first
    $sql1 = "DELETE FROM listing_images WHERE listing_id = :id";
    $stmt1 = $pdo->prepare($sql1);
    $stmt1->execute([":id" => $id]);


    // delete listing
    $sql2 = "DELETE FROM listings WHERE id = :id";
    $stmt2 = $pdo->prepare($sql2);
    $stmt2->execute([":id" => $id]);


    echo json_encode([
        "status" => "success"
    ]);

    exit;

} catch (Exception $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);

    exit;

}
