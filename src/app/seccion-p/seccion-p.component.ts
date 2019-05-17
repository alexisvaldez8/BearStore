import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';


@Component({
  selector: 'app-seccion-p',
  templateUrl: './seccion-p.component.html',
  styleUrls: ['./seccion-p.component.css']
})
export class SeccionPComponent implements OnInit {

  constructor(public http:ConsultasService) {
    this.traerProductos();
    
   }
    seccion:any;
    genero:any;
    titulo;any;

productos_img;
traerProductos(){
  this.http.traerImagenes().then(
    (data)=>{
      console.log("imprime data...");
      console.log(data);
      this.productos_img=data;
      this.productos_img=this.productos_img.productos;
      console.log("llenado...");
      console.log(this.productos_img);
    },(error)=>{
      console.log("ERROR "+JSON.stringify(error));
    }
  );
}
   
  
  ngOnInit() {
    this.seccion="Playeras"
  
  this.genero="Hombre";

  this.titulo=this.seccion+" para "+this.genero;
    function recuperarSeccion() {
      //aqui vamos a recuperar el genero y categoria a mostrar
      }
    function recuperarGenero() {
    //aqui vamos a recuperar el genero y categoria a mostrar
    }
  }

}
