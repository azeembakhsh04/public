<?php 

$response = [];
// $allowedOrigins = [];
// $origin = isset($_SERVER["HTTP_ORIGIN"]) ? $_SERVER["HTTP_ORIGIN"] : "";

// if(!in_array($allowedOrigins, $origin)) {
//     $response["sataus"] = "forbidden";
//     $response["code"] = "403";
//     $response["reply"] =  "User does not have permission";
//     echo json_encode($response);
//     exit;
// }

header("Access-Controll-Allow-Origen: *");
//header("Access-Controll-Allow-Headers: Content-Type, Authorization");
header("Access-Controll-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

$app_name = $_POST['app'] ? $_POST['app'] : "null";
$sender = $_POST['sender'];
$message = $_POST['message'];
$group = $_POST['group_name'];
$phone = $_POST['$phone'];

if(!$app_name){
    $response['reply'] = 'app name not avilable';
  exit;
}

$response["reply"] = $app_name;

echo json_encode($response);
?>
