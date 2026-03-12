<?php

// ✅ DATABASE CONFIG
$host = "localhost";
$dbname = "dormlinkborongan";
$username = "root";
$password = "";

try {

    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );

} catch (PDOException $e) {

    echo json_encode([
        "status" => "error",
        "message" => "DB connection failed"
    ]);

    exit;
}