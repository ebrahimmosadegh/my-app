<?php
include 'connect.php';
$json= file_get_contents('php://input');
$obj = json_decode($json,true);
$id = $obj['student_id'];
$name = $obj['student_name'];
$class = $obj['student_class'];
$phone_number = $obj['student_phone_number'];
$email = $obj['student_email'];
$query = "UPDATE `tbl_student` SET `student_name`=:name,`student_class`=:class,
`student_phone_number`=:phone,`student_email`=:email WHERE `student_id`=:id";
$r = $db->prepare($query);
$r->bindParam(":name",$name);
$r->bindParam(":class",$class);
$r->bindParam(":phone",$phone_number);
$r->bindParam(":email",$email);
$r->bindParam(":id",$id);
$result = $r->execute();
if($result){
  $msg="succefull";
  $json_msg = json_encode($msg);
  echo $json_msg;
}
else{
  $msg="fail";
  $json_msg = json_encode($msg);
  echo $json_msg;
}
 ?>
