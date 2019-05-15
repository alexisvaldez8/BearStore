import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-datosusuario',
  templateUrl: './datosusuario.component.html',
  styleUrls: ['./datosusuario.component.css']
})
export class DatosusuarioComponent implements OnInit {

  telefono:String;
  callenumero:String;
  colonia:String;
  codigopostal:String;
  ciudad:String;
  estado:String;

  constructor() { }

  nombre="Edgar Alexis";
  
  enviarDatos(){
    console.log(this.telefono+" "+this.callenumero+" "+this.colonia+" "+this.codigopostal+" "+this.ciudad+" "+this.estado);
  }
  
  ngOnInit() {
  }

}
