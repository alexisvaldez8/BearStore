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

regresaPedidos(usuario:String){
  var urlpedidos=this.url+"traerPedidos.php?idusuario="+usuario;
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

regresaDatosUsuario(usuario:String){
  var urldatosusuario=this.url+"datosUsuario.php?idusuario="+usuario;
  console.log(urldatosusuario);
  return new Promise((resolve, reject)=>{
    this.http.get(urldatosusuario).subscribe(data=>{
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

traerImagenes(genero:String,categoria:String){
  var urlimagenesseccion=this.url+"imagenesSeccion.php?genero="+genero+"&categoria="+categoria;
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

traerProducto(idproducto:String){
  var urliproducto=this.url+"producto.php?idproducto="+idproducto;
  console.log(urliproducto);
  return new Promise((resolve, reject)=>{
    this.http.get(urliproducto).subscribe(data=>{
      console.log("suscribe");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  }); 
}

altaProductos(nombreproducto:String,stock:String,precio:String,talla:String,genero:String,color:String,fecha:String){
  console.log("antes return");
  var urlregistroProducto=this.url+"registroProductos.php?nombreproducto="+nombreproducto+"&stock="+stock+"&precio="+precio+"&talla="+talla+"&genero="+genero+"&color="+color+"&fechapub="+fecha;
  console.log(urlregistroProducto);
  return new Promise((resolve, reject)=>{
    this.http.get(urlregistroProducto).subscribe(data=>{
      console.log("suscribe");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  });
}

modificarDatosUsuario(id:String,telefono:String,callenumero:String,colonia:String,codigopostal:String,ciudad:String,estado:String){
  console.log("antes return");
  var urlmodificarDatosUsuario=this.url+"actualizarDatosUsuario.php?idusuario="+id+"&telefono="+telefono+"&callenumero="+callenumero+"&colonia="+colonia+"&codigopostal="+codigopostal+"&ciudad="+ciudad+"&estado="+estado;
  console.log(urlmodificarDatosUsuario);
  return new Promise((resolve, reject)=>{
    this.http.get(urlmodificarDatosUsuario).subscribe(data=>{
      console.log("suscribe");
        resolve(data);
    },(err)=>{
      reject(err);
    })
  });
}






}

