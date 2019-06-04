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



$consulta="SELECT id_pedido,id_usuario,fecha,metodo_pago,total FROM pedidos";

$resultado=mysqli_query($conexion,$consulta);

while($registro=mysqli_fetch_array($resultado)){
	$result["idusuario"]=$registro['id_usuario'];
	$result["idpedido"]=$registro['id_pedido'];
	$result["fecha"]=$registro['fecha'];
	$result["metodopago"]=$registro['metodo_pago'];
	$result["total"]=$registro['total'];


$json['pedidos'][]=$result;

}


mysqli_close($conexion);

echo json_encode($json);



?>