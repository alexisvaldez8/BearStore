<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type");

$hostname_localhost ="localhost";
$database_localhost ="tiendaonline";
$username_localhost ="root";
$password_localhost ="";

if(isset($_GET["nombreproducto"])){
$nombreproducto=$_GET["nombreproducto"];
$stockchica=$_GET["stockchica"];
$stockmediana=$_GET["stockmediana"];
$stockgrande=$_GET["stockgrande"];
$stockxl=$_GET["stockxl"];
$precio=$_GET["precio"];
$genero=$_GET["genero"];
$color=$_GET["color"];
$fechapub=$_GET["fechapub"];

$json=array();

$conexion= new mysqli($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
$conexion->set_charset("utf8");


$consulta="INSERT INTO productos 
(nombre,stock_chica,stock_mediana,stock_grande,stock_extragrande,precio,genero,color,fecha_publicacion) VALUES (?,?,?,?,?,?,?,?,?)";

$stm=$conexion->prepare($consulta);


$stm->bind_param('siiiidsss',$nombreproducto,$stockchica,$stockmediana,$stockgrande,$stockxl,$precio,$genero,$color,$fechapub);

if($stm->execute()){
	$json['registro']="correcto";
}else{
	$json['registro']="incorrecto";
}

mysqli_close($conexion);

echo json_encode($json);

}

?>