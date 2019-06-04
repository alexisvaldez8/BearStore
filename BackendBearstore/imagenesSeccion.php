<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type");

$hostname_localhost ="localhost";
$database_localhost ="tiendaonline";
$username_localhost ="root";
$password_localhost ="";

if(isset($_GET["genero"])){
$genero=$_GET["genero"];
$categoria=$_GET["categoria"];

$json=array();

$conexion= new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
$conexion->set_charset("utf8");


$consulta="SELECT productos.id_producto, nombre, precio, productos.genero, categoria, ruta_imagen FROM productos INNER JOIN fotos_productos ON productos.id_producto=fotos_productos.id_producto WHERE productos.genero='{$genero}' AND fotos_productos.categoria='{$categoria}'";


$resultado=mysqli_query($conexion,$consulta);

while($registro=mysqli_fetch_array($resultado)){
	$result["idproducto"]=$registro['id_producto'];
	$result["nombre"]=$registro['nombre'];
	$result["precio"]=$registro['precio'];
	$result["ruta"]="http://localhost:8080/BackendBearstore/img/productos/".$registro['genero']."/".$registro['categoria']."/".$registro['ruta_imagen'];	


$json['productos'][]=$result;

}

mysqli_close($conexion);

echo json_encode($json);
}

?>