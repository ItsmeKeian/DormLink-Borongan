<?php

session_start();

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require "dbconnect.php"; // PDO connection


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request"
    ]);
    exit;
}


$data = json_decode(file_get_contents("php://input"), true);

$full_name = $data["full_name"] ?? "";
$email = $data["email"] ?? "";
$phone = $data["phone"] ?? "";
$role = $data["role"] ?? "student";
$password = $data["password"] ?? "";


if (!$full_name || !$email || !$password) {

    echo json_encode([
        "status" => "error",
        "message" => "Missing fields"
    ]);
    exit;
}


try {

    # check email

    $stmt = $pdo->prepare(
        "SELECT id FROM users WHERE email = ?"
    );

    $stmt->execute([$email]);

    if ($stmt->rowCount() > 0) {

        echo json_encode([
            "status" => "exists",
            "message" => "Email already registered"
        ]);

        exit;
    }


    # hash password

    $password_hash = password_hash(
        $password,
        PASSWORD_DEFAULT
    );


    # insert user

    $stmt = $pdo->prepare(

        "INSERT INTO users
        (full_name, email, password_hash, role, phone, is_verified, created_at)
        VALUES (?, ?, ?, ?, ?, 0, NOW())"

    );

    $stmt->execute([
        $full_name,
        $email,
        $password_hash,
        $role,
        $phone
    ]);


    echo json_encode([
        "status" => "success",
        "message" => "Account created"
    ]);


} catch (PDOException $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}