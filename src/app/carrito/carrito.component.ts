import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public http:ConsultasService) {
    this.regresaCarrito();
   }

   

  carrito
  jsonusuario=JSON.parse(localStorage.getItem("Sesion"));
  idusuario=this.jsonusuario[0].id_usuario;
  
carritop=[
     {cantidad:'1',producto:'Spiderlogo',talla:'chica'},
     {cantidad:'2',producto:'Iron Man Face',talla:'chica'},
     {cantidad:'4',producto:'Capitan',talla:'mediana'}
  ];
nombreusuario;
numArticulos;
  regresaCarrito(){
    console.log(this.jsonusuario);
    console.log(this.idusuario);
		this.http.verCarrito(this.idusuario).then(
			(data)=>{
				console.log(data);
        this.carrito=data;
        this.carrito=this.carrito.carrito;
        this.nombreusuario=this.jsonusuario[0].nombre;
        this.numArticulos=this.carrito.length;
        console.log("articulos "+this.numArticulos);
        this.getTotalPedido();
			},(error)=>{
				console.log("ERROR "+JSON.stringify(error));
			}
		);
  }
  
  totalpedido
  totalpedidoInt;
   totalFinal=0;
  getTotalPedido(){
    for(let i = 0; i < this.carrito.length; i++){
        this.totalpedido=this.carrito[i].total;
        this.totalpedidoInt=parseInt(this.carrito[i].total);
        console.log("totales "+this.totalpedidoInt);
        this.totalFinal=this.totalFinal+this.totalpedidoInt;       
        console.log(i+" "+this.totalFinal);
      
    }
    console.log("total pedido: "+this.totalFinal);
  }

  ngOnInit() {
  }

}
