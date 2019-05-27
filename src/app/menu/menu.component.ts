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

 articulosCarrito=0;
totalCarrito=0;
sesion;

usuarioActual=null;
usuarioSesion;

conjuntoSeccion:[{ Seccion:'Playeras'}, {Seccion:'Sudaderas'}, {Seccion:'Chamarras'}
];

grabarlocals(){

	let nombre:string="Alexis";
	let producto={
		idproducto:"1",
		nombre:"Spiderman logo",
		precio:"269.00"
	}

	//localStorage.setItem("Sesion","");


}

comprobarSesion(){
	if(localStorage.getItem("Sesion")==null){
			this.sesion="Iniciar Sesion";
		}else{
			this.usuarioActual=localStorage.getItem("Sesion");
			this.usuarioSesion= JSON.parse(this.usuarioActual);
			console.log(this.usuarioSesion);
			this.sesion="Cerrar Sesion";
		}
}

cerrarSesion(){
	this.usuarioActual=null;
	localStorage.removeItem("Sesion");
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

  constructor(public dialog: MatDialog, public http:ConsultasService) {
		this.comprobarSesion();
		//this.grabarlocals();
	}

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

			login(){
				if(this.email==null||this.password==null){
					alert("Completa los campos vacíos");
				}else{
						this.loginbd();
						document.getElementById('id01').style.display='none';
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

	loginbd(){
		this.http.loginUsurio(this.email,this.password).then(
			(data)=>{
				console.log(data);
				this.usuarioSesion=data;
				if(this.usuarioSesion!=null){
					alert("¡Sesion iniciada con exito!");
					location.reload();
					this.sesion="Cerrar Sesion";
					//console.log(this.usuarioSesion.usuarios);
					this.usuarioSesion=this.usuarioSesion.usuarios;
					localStorage.setItem("Sesion", JSON.stringify(this.usuarioSesion));
					console.log(this.usuarioSesion);
				}else{
					alert("¡Usuario y/o contraseña invalidos!");
				}
			},(error)=>{
				console.log("ERROR "+JSON.stringify(error));
			}
		);
	}

	name:String="troca";
	animal:String="Perro";
	
	abrirCarritoModal(){
		const dialogRef = this.dialog.open(CarritoComponent, {
      width: '800px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
	}
	;

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
