import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-p',
  templateUrl: './seccion-p.component.html',
  styleUrls: ['./seccion-p.component.css']
})
export class SeccionPComponent implements OnInit {

  constructor() {
    
   }
    seccion:any;
    genero:any;
    titulo;any;

  
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
