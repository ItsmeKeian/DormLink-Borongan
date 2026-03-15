<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");

require "dbconnect.php";

$id = $_POST["id"];
$status = $_POST["status"];

$stmt = $pdo->prepare("
UPDATE listings
SET status = ?
WHERE id = ?
");

$stmt->execute([$status, $id]);

echo json_encode([
"status" => "success"
]);