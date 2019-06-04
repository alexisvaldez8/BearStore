<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type");

$hostname_localhost ="localhost";
$database_localhost ="tiendaonline";
$username_localhost ="root";
$password_localhost ="";

if(isset($_GET["idusuario"])){
$idusuario=$_GET["idusuario"];

$json=array();

$conexion= new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
$conexion->set_charset("utf8");

$consulta="DELETE FROM carrito WHERE id_usuario=?";

$stm=$conexion->prepare($consulta);
$stm->bind_param('i',$idusuario);

if($stm->execute()){
	$json['registro']="correcto";
}else{
	$json['registro']="incorrecto";
}

mysqli_close($conexion);

echo json_encode($json);

}

?>