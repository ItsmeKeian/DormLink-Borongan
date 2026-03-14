<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require "dbconnect.php";

try {

    $stmt = $pdo->prepare("
    SELECT id, title, price, latitude, longitude
    FROM listings
");

    $stmt->execute();

    $listings = $stmt->fetchAll();

    echo json_encode($listings);

} catch (Exception $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);

}