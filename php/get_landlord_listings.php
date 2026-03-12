<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once "dbconnect.php";


if (!isset($_SESSION["user_id"])) {

    echo json_encode([]);
    exit;
}

$user_id = $_SESSION["user_id"];


$sql = "

SELECT l.*,
(
    SELECT image
    FROM listing_images
    WHERE listing_id = l.id
    LIMIT 1
) AS image

FROM listings l
WHERE landlord_id = ?
ORDER BY id DESC

";

$stmt = $pdo->prepare($sql);
$stmt->execute([$user_id]);

$listings = $stmt->fetchAll();

echo json_encode($listings);