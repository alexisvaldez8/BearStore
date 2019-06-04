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
$contrasena=$_GET["contrasena"];


if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
} 

$consulta="UPDATE usuarios SET contrasena='{$contrasena}' WHERE id_usuario='{$idusuario}'";

if ($conexion->query($consulta) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conexion->error;
}


$conexion->close();



?>