import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ConsultasService} from '../consultas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  
  constructor(public http:ConsultasService,private rutaActiva: ActivatedRoute) {
    this.traerUsuario();
    this.traerPedidos();
    this.traerPedidosAdmin();
  }

  titulo="Pedidos";

  pedidos;
  usuarioActual;
  usuarioSesion;
  nombreusuario='No se ha iniciado sesion';
  
  /*pedidos=[{
     idpedido:'1',fecha:'2019-05-10',total:'269.00'},
    {idpedido:'2',fecha:'2019-05-11',total:'360.00'},
    {idpedido:'3',fecha:'2019-05-12',total:'570.00'}
  ];*/

  
    muestrapedidos(){
      console.log(this.pedidos);
      }


      traerUsuario(){
        if(localStorage.getItem("Sesion")==null){

        }else{
        this.usuarioActual=JSON.parse(localStorage.getItem("Sesion"));
        //this.usuarioActual=this.usuarioActual.id_usuario;
        //this.usuarioSesion= JSON.parse(this.usuarioActual);
        console.log("user "+this.usuarioActual[0].id_usuario);
        this.usuarioSesion=this.usuarioActual[0].id_usuario;
        this.nombreusuario=this.usuarioActual[0].nombre;
        }

      }

      traerPedidos(){
        this.http.regresaPedidos(this.usuarioSesion).then(
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

      traerPedidosAdmin(){
        this.http.pedidosAdmin().then(
          (data)=>{
            console.log("Pedidos Admin");
            console.log(data);
            //this.pedidos=data;
            //this.pedidos=this.pedidos.pedidos;
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
