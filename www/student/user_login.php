<?php
include 'connect.php';

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$email = $obj['email'];
$password = $obj['password'];
$query = "SELECT * FROM `tb_admin` WHERE  `email`=:email and `password`=:pass";
$r = $db->prepare($query);
$r->bindParam(":email",$email);
$r->bindParam(":pass",$password);
$result = $r->execute();

	if($r->rowCount()>0){
	  $message = "Data Matched";
	  $messageJson = json_encode($message);
	  echo ($messageJson);
	}
	else{
	  $message = "Invalid Username and password";
	  $messageJson=json_encode($message);
	  echo ($messageJson);
	}


 ?>
