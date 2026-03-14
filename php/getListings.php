<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "dormlinkborongan");

if ($conn->connect_error) {
    die("Connection failed");
}

$sql = "SELECT id, title, price, latitude, longitude 
        FROM listings 
        WHERE status = 'approved'";

$result = $conn->query($sql);

$listings = [];

while ($row = $result->fetch_assoc()) {
    $listings[] = $row;
}

echo json_encode($listings);

?>