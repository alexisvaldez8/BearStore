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
$telefono=$_GET["telefono"];
$callenumero=$_GET["callenumero"];
$colonia=$_GET["colonia"];
$codigopostal=$_GET["codigopostal"];
$ciudad=$_GET["ciudad"];
$estado=$_GET["estado"];

if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
} 

$consulta="UPDATE usuarios SET telefono='{$telefono}',calle_numero='{$callenumero}',colonia='{$colonia}',codigo_postal='{$codigopostal}',ciudad='{$ciudad}',estado='{$estado}' WHERE id_usuario='{$idusuario}'";

if ($conexion->query($consulta) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conexion->error;
}


$conexion->close();



?>