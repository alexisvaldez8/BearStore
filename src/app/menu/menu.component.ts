import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material';
import { CarritoComponent } from '../carrito/carrito.component';
import { ReplaceSource } from 'webpack-sources';
import {ConsultasService} from '../consultas.service';
import { PatternValidator } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

nombre:String;
paterno:String;
materno:String;
correo:String;
contrasenia:String;
repcontrasenia:String;

  constructor(public dialog: MatDialog, public http:ConsultasService) {}

	CarritoMensaje="Tu carrito de compras esta vacio";
  
prueba(){
	'use strict';
    document.getElementById('menu').classList.toggle('mostrar');
}
  registro(){
		this.registrobd();
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
			this.interval = setInterval(function(){
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

		

  }

}
