<?php
include 'connect.php';
$query = "SELECT * FROM `tb_student`";
$r = $db->query($query);
if($r->rowCount()>0){
  while($row[]=$r->fetch(PDO::FETCH_ASSOC)){
    $item = $row;
    $json = json_encode($item);
  }
}
else{
  echo "no Result Fount";
}
echo $json;
 ?>
