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

  regresaCarrito(){
    console.log(this.jsonusuario);
    console.log(this.idusuario);
		this.http.verCarrito(this.idusuario).then(
			(data)=>{
				console.log(data);
        this.carrito=data;
        
			},(error)=>{
				console.log("ERROR "+JSON.stringify(error));
			}
		);
	}

  ngOnInit() {
  }

}
