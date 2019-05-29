import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-envio-pago',
  templateUrl: './envio-pago.component.html',
  styleUrls: ['./envio-pago.component.css']
})
export class EnvioPagoComponent implements OnInit {

  constructor(public http:ConsultasService,private router: Router) {
    this.construirFecha();  
    this.regresaCarrito();
   }

  metodopago='Deposito Tarjeta';
  verSeleccion:String= '';
  carrito;
  jsonusuario=JSON.parse(localStorage.getItem("Sesion"));
  idusuario=this.jsonusuario[0].id_usuario;

  fecha;

  n =  new Date();
  //Año
  y = this.n.getFullYear();
  //Mes
  m = this.n.getMonth() + 1;
  //Día
  d = this.n.getDate();
construirFecha(){  
if(this.m<10){
  this.fecha=this.y + "-0" + this.m + "-" + this.d;
}else{
  this.fecha=this.y + "-" + this.m + "-" + this.d;
}
return this.fecha;
}

  costoenvio=0;
  nombreusuario;
  numArticulos=0;
    regresaCarrito(){
      console.log(this.jsonusuario);
      console.log(this.idusuario);
      this.nombreusuario=this.jsonusuario[0].nombre;
      this.http.verCarrito(this.idusuario).then(
        (data)=>{
          console.log(data);
          this.carrito=data;
          this.carrito=this.carrito.carrito;
          console.log("aqui llega: "+this.carrito);
          if(this.carrito==undefined){
            alert("¡Tu carrito de compras esta vacio!")
            location.reload();
          }else{
          this.numArticulos=this.carrito.length;
          console.log("articulos "+this.numArticulos);
          localStorage.setItem("Articulos",JSON.stringify(this.numArticulos));
          this.getTotalPedido();
          this.calcularEnvioTotalFinal();
          }
        },(error)=>{
          console.log("ERROR "+JSON.stringify(error));
        }
      );
    }
  
  totalpedidoenvio=0;
  subtotalpedido;
  subtotalpedidoInt;
  subtotalFinal=0;
  getTotalPedido(){
    for(let i = 0; i < this.carrito.length; i++){
        this.subtotalpedido=this.carrito[i].total;
        this.subtotalpedidoInt=parseInt(this.carrito[i].total);
        console.log("totales "+this.subtotalpedidoInt);
        this.subtotalFinal=this.subtotalFinal+this.subtotalpedidoInt;       
        console.log(i+" "+this.subtotalFinal);  
    }
    console.log("total pedido: "+this.subtotalFinal);
    localStorage.setItem("TotalCarrito",JSON.stringify(this.subtotalFinal));
  }

    calcularEnvioTotalFinal(){
      if(this.subtotalFinal>=995){
        this.costoenvio=0;
      }else{
        this.costoenvio=99;
      }
      console.log(this.costoenvio);
      this.totalpedidoenvio=this.subtotalFinal+this.costoenvio;
      console.log(this.totalpedidoenvio);
    }
    
    regresarConfirmarInfo(){
      this.router.navigateByUrl('/completar-compra');
    }
    
    finalizarCompra(){
      if(confirm("¿Finalizar la compra?")){
        this.registroPedidobd();
      }else{

      }
    }

    registroPedidobd(){
      this.http.agregarPedido(this.idusuario,this.fecha,this.metodopago,this.subtotalFinal,this.costoenvio,this.totalpedidoenvio).then(
        (data)=>{
          console.log(data);
          var result=data["registro"];
          console.log(result);
          if(result=="correcto"){
            this.pedidoProductosbd();
            alert("Pedido completado con exito!");
          }
        },(error)=>{
          console.log("ERROR "+JSON.stringify(error));
        }
      );
    }

      pedidoProductosbd(){

      }
    
  ngOnInit() {
  }

}
