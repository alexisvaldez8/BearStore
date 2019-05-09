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

  }

}
