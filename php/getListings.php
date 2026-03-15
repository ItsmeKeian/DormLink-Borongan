<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require "dbconnect.php";

try {

    $stmt = $pdo->prepare("
        SELECT 
            l.id,
            l.title,
            l.price,
            l.latitude,
            l.longitude,
            l.status,
            (
                SELECT image
                FROM listing_images
                WHERE listing_id = l.id
                LIMIT 1
            ) AS image
        FROM listings l
        WHERE l.status = 'approved'
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