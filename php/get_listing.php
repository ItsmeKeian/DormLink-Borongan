<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once "dbconnect.php";


$id = $_GET["id"] ?? 0;


/* ===== GET LISTING ===== */

$sql = "SELECT * FROM listings WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$id]);

$listing = $stmt->fetch();


/* ===== GET IMAGES ===== */

$sql2 = "

SELECT image
FROM listing_images
WHERE listing_id = ?

";

$stmt2 = $pdo->prepare($sql2);
$stmt2->execute([$id]);

$images = $stmt2->fetchAll();


echo json_encode([
    "listing" => $listing,
    "images" => $images
]);