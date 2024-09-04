<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$server_name="localhost";
$user_name="root";
$password="";
$db_name="student";
try{
  $db = new PDO("mysql:host=$server_name;dbname=$db_name",$user_name,$password);
}
catch(PDOExecption $e){
  echo $e->get_message();
}
 ?>
