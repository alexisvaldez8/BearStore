import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  titulo="Mis Pedidos";

  pedidos:[
    {
      idPedido:'1',
      fecha:'2019-05-10',
      totalPagado:'269.00'
    },
    {
      idPedido:'2',
      fecha:'2019-05-11',
      totalPagado:'538.00'
    },
    {
      idPedido:'3',
      fecha:'2019-05-12',
      totalPagado:'807.00'
    }

  ];

  muestrapedidos(){
  console.log(this.pedidos);
  }


  ngOnInit() {
    

  }

}
