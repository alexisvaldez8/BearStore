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



$consulta="SELECT * FROM usuarios";

$resultado=mysqli_query($conexion,$consulta);

while($registro=mysqli_fetch_array($resultado)){

		$result["idusuario"]=$registro['id_usuario'];
		$result["nombre"]=$registro['nombre'];
		$result["paterno"]=$registro['apellido_paterno'];
		$result["materno"]=$registro['apellido_materno'];
		$result["email"]=$registro['email'];
		$result["telefono"]=$registro['telefono'];
		$result["callenumero"]=$registro['calle_numero'];
		$result["colonia"]=$registro['colonia'];
		$result["codigopostal"]=$registro['codigo_postal'];
		$result["ciudad"]=$registro['ciudad'];
		$result["estado"]=$registro['estado'];

		$json['usuarios'][]=$result;

	}


mysqli_close($conexion);

echo json_encode($json);



?>