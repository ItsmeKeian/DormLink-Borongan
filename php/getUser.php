<?php

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");
require_once "dbconnect.php";

$user_id = $_GET['user_id'] ?? 0;

try {

    $stmt = $pdo->prepare("
        SELECT id, full_name, role, is_verified, verification_status
        FROM users
        WHERE id = ?
    ");

    $stmt->execute([$user_id]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($user);

} catch (PDOException $e) {

    echo json_encode([
        "error" => $e->getMessage()
    ]);

}