<?php
 
include_once '/root/TIMP3_2/spyc/Spyc.php';
include_once '/root/TIMP3_2/device-detector/autoload.php';
 
use DeviceDetector\DeviceDetector;
$dir=DIR;
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$ip = $_SERVER['HTTP_CLIENT_IP']
  ? : ($_SERVER['HTTP_X_FORWARDED_FOR']
  ? : $_SERVER['REMOTE_ADDR']);
 
$dd = new DeviceDetector($userAgent);
$dd->parse();
 
$clientInfo = $dd->getClient();
$osInfo = $dd->getOs();
$device = $dd->getDeviceName();
$brand = $dd->getBrandName();
$model = $dd->getModel();
file_put_contents($dir . '/' . $ip, "IPv4 : " . $ip . "\n");
foreach($clientInfo as $key=>$value){
       file_put_contents($dir . '/' . $ip,$key . ' : ' . $value . "\n", FILE_APPEND);
}
foreach($osInfo as $key => $value){
       file_put_contents($dir . '/' . $ip,$key . ' : ' .  $value . "\n", FILE_APPEND);
}
file_put_contents($dir . '/' . $ip, "device : " . $device . "\n", FILE_APPEND);
file_put_contents($dir . '/' . $ip, "brand : " . $brand . "\n", FILE_APPEND);
file_put_contents($dir . '/' . $ip, "model : " . $model . "\n", FILE_APPEND);
?>
<body style='background-color:pink'>
  <h1>Меня зовут <i>Ника</i> и Я <i>очень</i> люблю розовый цвет</h1>
