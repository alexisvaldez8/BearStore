import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ConsultasService} from '../consultas.service';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  
  constructor(public http:ConsultasService) {
    //this.muestrapedidos();
    this.traerPedidos();
  }

  titulo="Mis Pedidos";

  pedidos;
  
  /*pedidos=[{
     idpedido:'1',fecha:'2019-05-10',total:'269.00'},
    {idpedido:'2',fecha:'2019-05-11',total:'360.00'},
    {idpedido:'3',fecha:'2019-05-12',total:'570.00'}
  ];*/

  
    muestrapedidos(){
      console.log(this.pedidos);
      }


      traerPedidos(){
        this.http.regresaPedidos().then(
          (data)=>{
            console.log("imprime data...");
            console.log(data);
            this.pedidos=data;
            this.pedidos=this.pedidos.pedidos;
            console.log("llenado...");
            console.log(this.pedidos);
          },(error)=>{
            console.log("ERROR "+JSON.stringify(error));
          }
        );
      }

  ngOnInit() {
    
  }

}
