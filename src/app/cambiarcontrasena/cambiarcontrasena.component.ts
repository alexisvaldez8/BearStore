import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.component.html',
  styleUrls: ['./cambiarcontrasena.component.css']
})
export class CambiarcontrasenaComponent implements OnInit {
  idusuario;
  pass:String;
  confirmarpass:String;
  constructor(public http:ConsultasService,private rutaActiva: ActivatedRoute) {
    this.traerUsuario();
   }

  nombreusuario='';
  
  usuarioActual;
  usuarioSesion;

  btnpass=document.getElementById('boton_pass');
  
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
  
cambiarContrasena(){
  if(this.pass==null||this.confirmarpass==null){
    alert("Completa los campos vacíos");
  }else{
    if(this.pass==this.confirmarpass){
      console.log("iguales");
      this.cambiarPassbd();
      alert("Contraseña modificada con exito!");
      location.reload();
            }else{
              alert("las contraseñas no coinciden");
            }	
        }
}

cambiarPassbd(){
  this.http.cambiarPass(this.idusuario,this.pass).then(
    (data)=>{
      console.log(data);
    },(error)=>{
      console.log("ERROR "+JSON.stringify(error));
    }
  );
}
  

  ngOnInit() {
    this.idusuario=this.rutaActiva.snapshot.params.idproducto;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idusuario = params.idusuario;
      }
    );

    

  }

}
