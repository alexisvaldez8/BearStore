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
$idproducto=$_GET["idproducto"];
$talla=$_GET["talla"];
$cantidad=$_GET["cantidad"];
$total=$_GET["total"];

$json=array();

$conexion= new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
$conexion->set_charset("utf8");


$consulta="INSERT INTO carrito (id_usuario,id_producto,talla,cantidad,total) VALUES (?,?,?,?,?)";

$stm=$conexion->prepare($consulta);

$stm->bind_param('iisii',$idusuario,$idproducto,$talla,$cantidad,$total);

if($stm->execute()){
	$json['registro']="correcto";
}else{
	$json['registro']="incorrecto";
}

mysqli_close($conexion);

echo json_encode($json);

}

?>