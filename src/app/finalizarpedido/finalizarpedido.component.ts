import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ConsultasService} from '../consultas.service';


@Component({
  selector: 'app-finalizarpedido',
  templateUrl: './finalizarpedido.component.html',
  styleUrls: ['./finalizarpedido.component.css']
})
export class FinalizarpedidoComponent implements OnInit {

  constructor(public http:ConsultasService,private router: Router) { 
    this.regresaCarrito();
  }
  id_carrito=0;
  carrito;
  jsonusuario=JSON.parse(localStorage.getItem("Sesion"));
  idusuario=this.jsonusuario[0].id_usuario;
  finCompra(){
    this.vaciarCarritobd();
    this.router.navigateByUrl('');
  }

  vaciarCarritobd(){
    console.log("este mero es: "+this.idusuario);
      this.http.vaciarCarrito(this.idusuario).then(
        (data)=>{
          console.log(data);
        },(error)=>{
          console.log("ERROR "+JSON.stringify(error));
        }
      );
  }


  
nombreusuario;
numArticulos=0;
  regresaCarrito(){
    console.log(+this.idusuario);
		this.http.verCarrito(this.idusuario).then(
			(data)=>{
        console.log(data);
        this.carrito=data;
        this.carrito=this.carrito.carrito;
        if(this.carrito==undefined){
          alert("¡Tu carrito de compras esta vacio!")
          location.reload();
        }else{
        }
			},(error)=>{
				console.log("ERROR "+JSON.stringify(error));
			}
		);
  }

  ngOnInit() {
  }

}
