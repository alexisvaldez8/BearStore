<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type");

$hostname_localhost ="localhost";
$database_localhost ="tiendaonline";
$username_localhost ="root";
$password_localhost ="";


$json=array();

$conexion= new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
$conexion->set_charset("utf8");

$idusuario=$_GET["idusuario"];


$consulta="SELECT telefono,calle_numero,colonia,codigo_postal,ciudad,estado FROM usuarios WHERE id_usuario='{$idusuario}'";

$resultado=mysqli_query($conexion,$consulta);

while($registro=mysqli_fetch_array($resultado)){
	$result["telefono"]=$registro['telefono'];
	$result["calle_numero"]=$registro['calle_numero'];
	$result["colonia"]=$registro['colonia'];
	$result["codigo_postal"]=$registro['codigo_postal'];
	$result["ciudad"]=$registro['ciudad'];
	$result["estado"]=$registro['estado'];

$json['usuario'][]=$result;

}


mysqli_close($conexion);

echo json_encode($json);



?>