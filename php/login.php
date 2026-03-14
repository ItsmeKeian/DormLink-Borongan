<?php

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");


session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => false,
    'httponly' => false,
    'samesite' => 'Lax'
]);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once "dbconnect.php";


if (!isset($_POST["email"]) || !isset($_POST["password"])) {
    echo json_encode([
        "status" => "no_data"
    ]);
    exit;
}


$email = $_POST["email"];
$password = $_POST["password"];


$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email]);

$user = $stmt->fetch();


if (!$user) {

    echo json_encode([
        "status" => "not_found"
    ]);
    exit;
}


if (!password_verify($password, $user["password_hash"])) {

    echo json_encode([
        "status" => "wrong_password"
    ]);
    exit;
}


/* ✅ SAVE SESSION */

$_SESSION["user"] = [
    "id" => $user["id"],
    "name" => $user["full_name"],
    "role" => $user["role"]
];

$_SESSION["user_id"] = $user["id"];
$_SESSION["role"] = $user["role"];


/* ✅ RESPONSE */

echo json_encode([
    "status" => "success",
    "user" => $_SESSION["user"]
]);