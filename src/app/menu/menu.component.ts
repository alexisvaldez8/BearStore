import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material';
import { CarritoComponent } from '../carrito/carrito.component';
import { ReplaceSource } from 'webpack-sources';
import {ConsultasService} from '../consultas.service';
import { PatternValidator } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	constructor(public dialog: MatDialog, public http:ConsultasService) {
		this.comprobarSesion();
		this.validar();
	}

 articulosCarrito=0;
totalCarrito=0;
sesion;

userAct;
banderaSesion:boolean;
usuarioActual=null;
usuarioSesion;

conjuntoSeccion:[{ Seccion:'Playeras'}, {Seccion:'Sudaderas'}, {Seccion:'Chamarras'}
];

comprobarSesion(){
	if(localStorage.getItem("Sesion")==null){
		this.banderaSesion=false;
			this.sesion="Iniciar Sesion";
			console.log(this.usuarioSesion);
			this.totalCarrito=0;
			this.articulosCarrito=0;
		}else{
			this.banderaSesion=true;
			this.usuarioActual=localStorage.getItem("Sesion");
			this.usuarioSesion= JSON.parse(this.usuarioActual);
			this.userAct=this.usuarioSesion[0].id_usuario;
			console.log(this.usuarioSesion);
			this.sesion="Cerrar Sesion";
		}
}
carrito;
numArticulos
totalpedido; totalpedidoInt; totalFinal=0;
comprobarCarrito(){
	this.http.verCarrito(this.usuarioSesion[0].id_usuario).then(
		(data)=>{
			console.log(data);
			this.carrito=data;
			this.carrito=this.carrito.carrito;
			console.log("aqui llega: "+this.carrito);
			if(this.carrito==undefined){
			}else{
			this.numArticulos=this.carrito.length;
			console.log("articulos "+this.numArticulos);
			localStorage.setItem("Articulos",JSON.stringify(this.numArticulos));
			this.articulosCarrito=JSON.parse(localStorage.getItem("Articulos"));
			for(let i = 0; i < this.carrito.length; i++){
        this.totalpedido=this.carrito[i].total;
        this.totalpedidoInt=parseInt(this.carrito[i].total);
        console.log("totales "+this.totalpedidoInt);
        this.totalFinal=this.totalFinal+this.totalpedidoInt;       
        console.log(i+" "+this.totalFinal);  
    }
    console.log("total pedido: "+this.totalFinal);
		localStorage.setItem("TotalCarrito",JSON.stringify(this.totalFinal));
		this.totalCarrito=JSON.parse(localStorage.getItem("TotalCarrito"));

			}
		},(error)=>{
			console.log("ERROR "+JSON.stringify(error));
		}
	);
}


validar(){
	if(this.usuarioSesion==undefined){

	}else{
		this.comprobarCarrito();
	}
}


cerrarSesion(){
	this.usuarioActual=null;
	this.banderaSesion=false;
	localStorage.removeItem("Sesion");
	localStorage.removeItem("Articulos");
	localStorage.removeItem("TotalCarrito");
	this.articulosCarrito=0;
	this.totalCarrito=0;
	this.sesion="Iniciar Sesion"

}

sumarArticulos(){
	this.articulosCarrito++;
}

hombre:String;
mujer:String;
nino:String;
cuenta:String;
contacto:String;

email:String;
password:String;

nombre:String;
paterno:String;
materno:String;
correo:String;
contrasenia:String;
repcontrasenia:String;

CarritoMensaje="Tu carrito de compras esta vacio";
	
	

prueba(){
	'use strict';
    document.getElementById('menu').classList.toggle('mostrar');
}
mostrarLogin(){
	if(this.sesion=="Iniciar Sesion"){
		document.getElementById('id01').style.display='block';
	}else{
		if(confirm("¿Deseas salir?")){
			alert("Sesion terminada exitosamente");
			location.reload();
			this.cerrarSesion();
		}else{
			//alert("Usted cancelo la acción para guardar");
		}
	}
}
mostrarRegistro(){
	document.getElementById('id02').style.display='block';
}

  registro(){
		if(this.nombre==null||this.paterno==null||this.materno==null||this.correo==null||this.contrasenia==null||this.repcontrasenia==null){
			alert("Completa los campos vacíos");
		}else{
			if(this.contrasenia==this.repcontrasenia){
				console.log("iguales");
				this.registrobd();
				document.getElementById('id02').style.display='none';
							}else{
								alert("las contraseñas no coinciden");
							}	
					}
			}

	registrobd(){
		this.http.registroUsurio(this.nombre,this.paterno,this.materno,this.correo,this.contrasenia).then(
			(data)=>{
				console.log(data);
				var result=data["registro"];
				console.log(result);
				if(result=="correcto"){
					alert("Usuario registrado con exito!");
				}
			},(error)=>{
				console.log("ERROR "+JSON.stringify(error));
			}
		);
	}

	login(){
		if(this.email==""||this.password==""){
			alert("Completa los campos vacíos");
		}else{
			this.http.loginUsurio(this.email,this.password).then(
				(data)=>{
					console.log(data);
					this.usuarioSesion=data;
					if(this.usuarioSesion==""){
						alert("¡Usuario y/o contraseña invalidos!");
					}else{
						document.getElementById('id01').style.display='none';
						alert("¡Sesion iniciada con exito!");
						this.banderaSesion=true;
						location.reload();
						this.sesion="Cerrar Sesion";
						this.usuarioSesion=this.usuarioSesion.usuarios;
						localStorage.setItem("Sesion", JSON.stringify(this.usuarioSesion));
						console.log(this.usuarioSesion);
					}
				},(error)=>{
					console.log("ERROR "+JSON.stringify(error));
				}
			);
			}
	}

	name:String="troca";
	animal:String="Perro";
	
	abrirCarritoModal(){
		if(this.usuarioSesion==undefined){
			alert("¡No haz iniciado sesion!")
		}else{
			const dialogRef = this.dialog.open(CarritoComponent, {
				width: '800px',
				data: {name: this.name, animal: this.animal}
			});
			dialogRef.afterClosed().subscribe(result => {
				console.log('The dialog was closed');
				this.animal = result;
			});
		}
	}
	

  	ngOnInit() {
		
    $(".submenu").click(function(){
			$(this).children("ul").slideToggle();
		})

    var slider = $('#slider');
		//almacenar botones
		var siguiente = $('#btn-next');
		var anterior = $('#btn-prev');

		//mover ultima imagen al primer lugar
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		//mostrar la primera imagen con un margen de -100%
		slider.css('margin-left', '-'+100+'%');

		function moverD() {
			slider.animate({
				marginLeft:'-'+200+'%'
			} ,700, function(){
				$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
				slider.css('margin-left', '-'+100+'%');
			});
		}

		function moverI() {
			slider.animate({
				marginLeft:0
			} ,700, function(){
				$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
				slider.css('margin-left', '-'+100+'%');
			});
		}

		function autoplay() {
			var interval;
			interval = setInterval(function(){
				moverD();
			}, 5000);
		}
		siguiente.on('click',function() {
			moverD();
			clearInterval(this.interval);
			autoplay();
		});

		anterior.on('click',function() {
			moverI();
			clearInterval(this.interval);
			autoplay();
		});


		autoplay();


		var modal=document.getElementById("modal");
    var modallogin = document.getElementById('id01');
		var modalregistro = document.getElementById('id02');


		
	
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modallogin) {
				document.getElementById('id01').style.display='none';
			}else{
				if (event.target == modalregistro) {
					document.getElementById('id02').style.display='none';
				}

			}
		}
		

  }

}
