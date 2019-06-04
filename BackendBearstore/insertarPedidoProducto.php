<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type");

$hostname_localhost ="localhost";
$database_localhost ="tiendaonline";
$username_localhost ="root";
$password_localhost ="";

if(isset($_GET["idpedido"])){
$idpedido=$_GET["idpedido"];
$idproducto=$_GET["idproducto"];
$talla=$_GET["talla"];
$cantidad=$_GET["cantidad"];

$json=array();

$conexion= new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
$conexion->set_charset("utf8");


$consulta="INSERT INTO pedidos_producto (id_pedido,id_producto,talla,cantidad) VALUES (?,?,?,?)";

$stm=$conexion->prepare($consulta);

$stm->bind_param('iiss',$idpedido,$idproducto,$talla,$cantidad);
if($stm->execute()){
	$json['registro']="correcto";
}else{
	$json['registro']="incorrecto";
}

mysqli_close($conexion);

echo json_encode($json);

}

?>