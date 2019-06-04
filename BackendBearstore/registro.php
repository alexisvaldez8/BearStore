<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type");

$hostname_localhost ="localhost";
$database_localhost ="tiendaonline";
$username_localhost ="root";
$password_localhost ="";

if(isset($_GET["nombre"])){
$nombre=$_GET["nombre"];
$apellido_p=$_GET["apellido_p"];
$apellido_m=$_GET["apellido_m"];
$correo=$_GET["correo"];
$contrasenia=$_GET["contrasenia"];


$json=array();

$conexion= new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
$conexion->set_charset("utf8");


$consulta="INSERT INTO usuarios (nombre,apellido_paterno,apellido_materno,email,contrasena) VALUES (?,?,?,?,?)";

$stm=$conexion->prepare($consulta);

$stm->bind_param('sssss',$nombre,$apellido_p,$apellido_m,$correo,$contrasenia);
if($stm->execute()){
	$json['registro']="correcto";
}else{
	$json['registro']="incorrecto";
}

mysqli_close($conexion);

echo json_encode($json);

}

?>