import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';



@Component({
  selector: 'app-completarcompra',
  templateUrl: './completarcompra.component.html',
  styleUrls: ['./completarcompra.component.css']
})
export class CompletarcompraComponent implements OnInit {

  constructor(public dialog: MatDialog,public http:ConsultasService,private router: Router) { 
    this.traerUsuario();
    this.traerdatos();
  }

  

  idusuario;
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
  paterno='';
  materno='';
  nombrecompleto='';
  email='';

  traerUsuario(){
    if(localStorage.getItem("Sesion")==null){
    }else{
    this.usuarioActual=JSON.parse(localStorage.getItem("Sesion"));
    //this.usuarioActual=this.usuarioActual.id_usuario;
    //this.usuarioSesion= JSON.parse(this.usuarioActual);
    console.log("user "+this.usuarioActual[0].id_usuario);
    this.usuarioSesion=this.usuarioActual[0].id_usuario;
    this.nombreusuario=this.usuarioActual[0].nombre;
    this.paterno=this.usuarioActual[0].paterno;
    this.materno=this.usuarioActual[0].materno;
    this.nombrecompleto=this.nombreusuario+" "+this.paterno+" "+this.materno;
    this.email=this.usuarioActual[0].email;
    console.log(this.email);
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

abrirCarritoModal(){
  this.router.navigateByUrl('');
  if(this.usuarioSesion==undefined){
    alert("¡No haz iniciado sesion!")
  }else{
    const dialogRef = this.dialog.open(CarritoComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

  ngOnInit() {
  }

}
