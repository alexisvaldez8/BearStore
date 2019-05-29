import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public dialog: MatDialog,public http:ConsultasService,private router: Router) {
    this.regresaCarrito();
   }

   mostrarid(id){
      console.log("este es el id: "+id);
   }

   btnClick= function () {
    this.router.navigateByUrl('/completar-compra');
  };

  carrito;
  jsonusuario=JSON.parse(localStorage.getItem("Sesion"));
  idusuario=this.jsonusuario[0].id_usuario;
  
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
        }
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
    localStorage.setItem("TotalCarrito",JSON.stringify(this.totalFinal));
  }

  id_carrito=0;
  eliminarCarritobd(idcarrito){
    this.id_carrito=idcarrito;
    console.log("este mero es: "+this.id_carrito);
    if(confirm("¿Deseas eliminar este articulo de tu carrito?")){
      this.http.eliminarCarrito(this.id_carrito).then(
        (data)=>{
          location.reload();
          console.log(data);
        },(error)=>{
          console.log("ERROR "+JSON.stringify(error));
        }
      );
      alert("¡Articulo eliminado con exito!");
      location.reload();
    }else{

    }
  
  }


  ngOnInit() {
  }

}
