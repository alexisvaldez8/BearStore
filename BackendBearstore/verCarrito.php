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

$consulta="SELECT productos.id_producto, nombre, precio, productos.genero, categoria, ruta_imagen, carrito.id_usuario,carrito.cantidad,carrito.id_carrito, carrito.talla, carrito.total FROM productos INNER JOIN fotos_productos ON productos.id_producto=fotos_productos.id_producto INNER JOIN carrito ON productos.id_producto=carrito.id_producto WHERE carrito.id_usuario='{$idusuario}';";

$resultado=mysqli_query($conexion,$consulta);

while($registro=mysqli_fetch_array($resultado)){
	$result["idproducto"]=$registro['id_producto'];
	$result["nombre"]=$registro['nombre'];
	$result["precio"]=$registro['precio'];
	$result["ruta"]="http://localhost:8080/BackendBearstore/img/productos/".$registro['genero']."/".$registro['categoria']."/".$registro['ruta_imagen'];
	$result["idusuario"]=$registro['id_usuario'];
	$result["idcarrito"]=$registro['id_carrito'];
	$result["talla"]=$registro['talla'];
	$result["cantidad"]=$registro['cantidad'];
	$result["total"]=$registro['total'];


$json['carrito'][]=$result;

}

mysqli_close($conexion);

echo json_encode($json);
}

?>