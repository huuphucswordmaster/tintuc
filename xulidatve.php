<?php
require 'conectdatve.php';
if(isset($_POST['btn-datve'])){
    $hoten = $_POST['hoten']; 
    $sodienthoai = $_POST['sodienthoai'];
    $email = $_POST['email'];
    $diemden = $_POST['diemden'];
    $thoigiankhoihanh = $_POST['thoigiankhoihanh'];
    $thoigiankhoihanh_converted = date('Y-m-d', strtotime($thoigiankhoihanh));
    $soluongkhachhang=$_POST['soluongkhachhang'];
    $sql = "INSERT INTO `xulidatve` (`hoten`,`sodienthoai`,`email`,`diemden`,`thoigiankhoihanh`,`soluongkhachhang`) VALUE('$hoten','$sodienthoai','$email','$diemden','$thoigiankhoihanh','$soluongkhachhang')";
    $conn->query($sql);
}

?>
