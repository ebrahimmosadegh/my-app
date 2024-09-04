<?php
include 'connect.php';
$json= file_get_contents('php://input');
$obj = json_decode($json,true);
$id = $obj['student_id'];
$query = "DELETE FROM `tb_student` WHERE `student_id`=:id";
$r = $db->prepare($query);
$r->bindParam(":id",$id);
$result = $r->execute();
if($result){
  $msg = "delete succefull";
  $json_msg = json_encode($msg);
  echo $json_msg;
}
else{
  $msg = "delete fail";
  $json_msg = json_encode($msg);
  echo $json_msg;
}
?>
