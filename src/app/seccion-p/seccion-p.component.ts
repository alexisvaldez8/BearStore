import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ConsultasService} from '../consultas.service';


@Component({
  selector: 'app-seccion-p',
  templateUrl: './seccion-p.component.html',
  styleUrls: ['./seccion-p.component.css']
})
export class SeccionPComponent implements OnInit {

  genero;
  categoria;

  
  constructor(public http:ConsultasService,private rutaActiva: ActivatedRoute) {
    
  }
    titulo;any;

productos_img;
traerProductos(){
  this.http.traerImagenes(this.genero,this.categoria).then(
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

    this.genero=this.rutaActiva.snapshot.params.genero;
    this.categoria=this.rutaActiva.snapshot.params.seccion;

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.genero = params.genero;
        this.categoria = params.seccion;
      }
    );

    this.traerProductos();


  this.titulo=this.categoria+" para "+this.genero;

    function recuperarSeccion() {
      //aqui vamos a recuperar el genero y categoria a mostrar
      }
    function recuperarGenero() {
    //aqui vamos a recuperar el genero y categoria a mostrar
    }
  }

}
