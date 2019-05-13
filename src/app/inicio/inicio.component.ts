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
    /*var modal=document.getElementById("modal");
    var modallogin = document.getElementById('id01');
		var modalregistro = document.getElementById('id02');
		
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modallogin) {
				modal.style.display = "none";
			}
		}
		
		window.onclick = function(event) {
			if (event.target == modalregistro) {
				modal.style.display = "none";
			}
		}*/
		
		
		function registro(){
			alert("Datos registrados correctamente");
		}
		
		function login(){
			alert("Iniciando sesion...");
		}


  }

}
