<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");

require "dbconnect.php";

try {

$stmt = $pdo->prepare("
SELECT 
l.id,
l.title,
l.price,
l.status,
(
SELECT image
FROM listing_images
WHERE listing_id = l.id
LIMIT 1
) AS image
FROM listings l
");

$stmt->execute();

$listings = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($listings);

} catch (Exception $e) {

echo json_encode([
"error" => $e->getMessage()
]);

}