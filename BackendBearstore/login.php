<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type");

$hostname_localhost ="localhost";
$database_localhost ="tiendaonline";
$username_localhost ="root";
$password_localhost ="";


	$json=array();

	$conexion = new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
	$conexion->set_charset("utf8");

	$correo=$_GET["correo"];
	$contrasena=$_GET["contrasena"];

	$consulta="SELECT * FROM usuarios WHERE email= '{$correo}' AND contrasena='{$contrasena}'";
$stm=$conexion->prepare($consulta);
$resultado= mysqli_query($conexion,$consulta);

	while($registro=mysqli_fetch_array($resultado)){

		$result["id_usuario"]=$registro['id_usuario'];
		$result["nombre"]=$registro['nombre'];
		$result["paterno"]=$registro['apellido_paterno'];
		$result["materno"]=$registro['apellido_materno'];
		$result["email"]=$registro['email'];

		$json['usuarios'][]=$result;

	}

mysqli_close($conexion);

echo json_encode($json);



?>