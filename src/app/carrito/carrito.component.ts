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
  regresaCarrito(){
    console.log(this.jsonusuario);
    console.log(this.idusuario);
		this.http.verCarrito(this.idusuario).then(
			(data)=>{
				console.log(data);
        this.carrito=data;
        this.carrito=this.carrito.carrito;
        this.nombreusuario=this.jsonusuario[0].nombre;
			},(error)=>{
				console.log("ERROR "+JSON.stringify(error));
			}
		);
	}

  ngOnInit() {
  }

}
