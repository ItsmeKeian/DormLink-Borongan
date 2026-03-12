<?php

require_once "dbconnect.php";

$email = "keianlandlord@gmail.com";   // palitan
$newPassword = "1234";        // palitan

$hash = password_hash($newPassword, PASSWORD_DEFAULT);

$sql = "UPDATE users SET password_hash = ? WHERE email = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$hash, $email]);

echo "Password updated!";