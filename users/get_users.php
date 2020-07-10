<?php

header("Content-type: application/json");

$users = [
    [
        "name" => "Athi",
        "Age" => 23,
        "occupation" => "Web Developer"
    ]
    ];

    echo json_encode($users, JSON_PRETTY_PRINT);