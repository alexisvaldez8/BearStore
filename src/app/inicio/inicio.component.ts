import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

titulo="Nuestros Productos"

parrafo = "Cada semana llegan productos completamente nuevos y disponibles para su compra inmediata, contamos servicio de pedido previo y envios a toda la Republica Mexicana";


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
