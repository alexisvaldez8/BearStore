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

  var urlcompleta=this.url+"registro.php?nombre="+nombre+"&apellido_p="+paterno+"&apellido_m="+materno+"&correo="+correo+"&contrasenia="+contrasenia;
  console.log(urlcompleta);

  return new Promise((resolve, reject)=>{
    this.http.get(urlcompleta).subscribe(data=>{
      console.log("suscribe");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  });
}




}

