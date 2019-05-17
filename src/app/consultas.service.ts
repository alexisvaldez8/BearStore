import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  url:String="http://localhost:8080/BackendBearstore/";

  constructor(public http:HttpClient) {}
   
registroUsurio(nombre:String,paterno:String,materno:String,correo:String,contrasenia:String){
  console.log("antes return");

  var urlregistro=this.url+"registro.php?nombre="+nombre+"&apellido_p="+paterno+"&apellido_m="+materno+"&correo="+correo+"&contrasenia="+contrasenia;
  console.log(urlregistro);

  return new Promise((resolve, reject)=>{
    this.http.get(urlregistro).subscribe(data=>{
      console.log("suscribe");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  });
}

regresaPedidos(){
  console.log("antes return");

  var urlpedidos=this.url+"traerPedidos.php";
  console.log(urlpedidos);

  return new Promise((resolve, reject)=>{
    this.http.get(urlpedidos).subscribe(data=>{
      console.log("suscribe");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  });
  
}

loginUsurio(correo:String,contrasenia:String){
  //console.log("antes return");
  var urllogin=this.url+"login.php?correo="+correo+"&contrasena="+contrasenia;
  console.log(urllogin);
  return new Promise((resolve, reject)=>{
    this.http.get(urllogin).subscribe(data=>{
      console.log("sesion iniciada");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  });
}

traerImagenes(){
  var urlimagenesseccion=this.url+"imagenesSeccion.php";
  console.log(urlimagenesseccion);

  return new Promise((resolve, reject)=>{
    this.http.get(urlimagenesseccion).subscribe(data=>{
      console.log("suscribe");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  });
  
}






}

