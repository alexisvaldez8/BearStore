import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material';
import {ConsultasService} from '../consultas.service';
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

  datosUsuario;

  usuarioActual;
  usuarioSesion;
  nombreusuario='';
  

  traerUsuario(){
    if(localStorage.getItem("Sesion")==null){

    }else{
    this.usuarioActual=JSON.parse(localStorage.getItem("Sesion"));
    //this.usuarioActual=this.usuarioActual.id_usuario;
    //this.usuarioSesion= JSON.parse(this.usuarioActual);
    console.log("user "+this.usuarioActual[0].id_usuario);
    this.usuarioSesion=this.usuarioActual[0].id_usuario;
    this.nombreusuario=this.usuarioActual[0].nombre;
    }

  }

  traerdatos(){
    this.http.regresaDatosUsuario(this.usuarioSesion).then(
      (data)=>{
        console.log("imprime data...");
        console.log(data);
        this.datosUsuario=data;
        this.datosUsuario=this.datosUsuario.usuario;
        console.log("llenado...");
        //console.log(this.datosUsuario);
        this.telefono=this.datosUsuario[0].telefono;
        this.callenumero=this.datosUsuario[0].calle_numero;
        this.colonia=this.datosUsuario[0].colonia;
        this.codigopostal=this.datosUsuario[0].codigo_postal;
        this.ciudad=this.datosUsuario[0].ciudad;
        this.estado=this.datosUsuario[0].estado;
        console.log("datos llenos...");
        console.log(this.telefono+" "+this.callenumero+" "+this.colonia+" "+this.codigopostal+" "+this.ciudad+" "+this.estado);
      },(error)=>{
        console.log("ERROR "+JSON.stringify(error));
      }
    );
  }

  constructor(public http:ConsultasService) {
    this.traerUsuario();
    this.traerdatos();
   }

  nombre="Edgar Alexis";
  
  enviarDatos(){
    this.actualizarDatos();
    location.reload();
    //console.log(this.telefono+" "+this.callenumero+" "+this.colonia+" "+this.codigopostal+" "+this.ciudad+" "+this.estado);
  }



  actualizarDatos(){
		this.http.modificarDatosUsuario(this.usuarioSesion,this.telefono,this.callenumero,this.colonia,this.codigopostal,this.ciudad,this.estado).then(
			(data)=>{
				console.log(data);
				var result=data["registro"];
				console.log(result);
				if(result=="correcto"){
					alert("Usuario registrado con exito!");
				}
			},(error)=>{
				console.log("ERROR "+JSON.stringify(error));
			}
		);
	}
  
  ngOnInit() {
  }

}
