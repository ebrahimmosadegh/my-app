<?php
include 'connect.php';
$json= file_get_contents('php://input');
$obj = json_decode($json,true);
$name = $obj['student_name'];
$class = $obj['studet_class'];
$phone_number = $obj['student_phone_number'];
$email = $obj['student_email'];
$query = "INSERT INTO `tb_student`(`student_name`, `student_class`, `student_phone_number`, `student_email`)
VALUES (?,?,?,?)";
$r = $db->prepare($query);
$r->bindValue(1,$name);
$r->bindValue(2,$class);
$r->bindValue(3,$phone_number);
$r->bindValue(4,$email);
$result = $r->execute();
if($result){
  $msg= "اطلاعات با موفقیت ثبت شد";
  $json_msg = json_encode($msg);
  echo $json_msg;
}
else{
  $msg= "خطلا در ثبت اطلاعات";
  $json_msg = json_encode($msg);
  echo $msg;
}
 ?>
