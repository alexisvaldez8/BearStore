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

  h=this.n.getHours();
  min=this.n.getMinutes();
  seg=this.n.getSeconds();

construirFecha(){  
if(this.m<10){
  this.fecha=this.y + "-0" + this.m + "-" + this.d+" "+this.h+":"+this.min+":"+this.seg;
}else{
  this.fecha=this.y + "-" + this.m + "-" + this.d+" "+this.h+":"+this.min+":"+this.seg;
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
          //this.imprimeid();

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

    traerPedidoid(){
      this.http.traerIDpedido(this.idusuario,this.fecha).then(
        (data)=>{
          console.log(data);
          this.idpedido=data;
          this.idpedido=this.idpedido.pedido[0].idpedido;
          console.log(this.idpedido);
          localStorage.setItem("idpedido",JSON.stringify(this.idpedido));
        },(error)=>{
          console.log("ERROR "+JSON.stringify(error));
        }
      );
    }

    registroPedidobd(){
      this.construirFecha();  
      this.http.agregarPedido(this.idusuario,this.fecha,this.metodopago,this.subtotalFinal,this.costoenvio,this.totalpedidoenvio).then(
        (data)=>{
          this.traerPedidoid();
          console.log(data);
          var result=data["registro"];
          console.log(result);
          if(result=="correcto"){
            this.pedidoProductos();
            alert("Pedido completado con exito!");
          }
          this.pedidoProductos();
          location.reload();
        },(error)=>{
          console.log("ERROR "+JSON.stringify(error));
        }
      );
    }

    talla;
    registrarPedidoProductobd(id){
      this.http.agregarPedidoProducto(id,this.idproducto,this.talla,this.cantidad).then(
        (data)=>{
          console.log(data);
          var result=data["registro"];
          console.log(result);
          if(result=="correcto"){
            console.log("pedido al cien!!!")
          }
        },(error)=>{
          console.log("ERROR "+JSON.stringify(error));
        }
      );
    }

      idpedido;
      
      id_pedido;
      idproducto;
      cantidad;
      pedidoProductos(){
        for(let i = 0; i < this.carrito.length; i++){
          this.id_pedido=localStorage.getItem("idpedido");
          this.id_pedido=this.id_pedido.replace(/['"]+/g, '');
          this.idproducto=this.carrito[i].idproducto;
          this.talla=this.carrito[i].talla;
          this.cantidad=this.carrito[i].cantidad;
          this.registrarPedidoProductobd(this.id_pedido); 
        }
      }
      pedidoProductos2(){
        for(let i = 0; i < this.carrito.length; i++){
          this.registrarPedidoProductobd(this.id_pedido); 
        }
      }
      
    
  ngOnInit() {
  }

}
