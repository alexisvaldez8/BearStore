import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public http:ConsultasService,private rutaActiva: ActivatedRoute) { 
    this.traerClientes();
  }

  clientesCompleto=[];
nombres=[];
contacto=[];
telefono; email;
direcciones=[]; callenum; colonia; codigopos; ciudad; estado;
name;paterno;materno;nombrecompleto;

getNombres(){
  for(let i = 0; i < this.clientes.length; i++){
    this.name=this.clientes[i].nombre;
    this.paterno=this.clientes[i].paterno;
    this.materno=this.clientes[i].materno;
    this.nombrecompleto=this.name+" "+this.paterno+" "+this.materno;
    this.telefono=this.clientes[i].telefono;
    this.email=this.clientes[i].email;
    this.callenum=this.clientes[i].callenumero;
    this.colonia=this.clientes[i].colonia;
    this.codigopos=this.clientes[i].codigopostal;
    this.ciudad=this.clientes[i].ciudad;
    this.estado=this.clientes[i].estado;
    this.contacto[i]=this.telefono+" "+this.email;
    this.nombres[i]=this.nombrecompleto;
    this.direcciones[i]=this.callenum+" "+this.colonia+" "+this.codigopos+" "+this.ciudad+" "+this.estado;
    console.log("nombres: "+this.nombres);
    this.clientesCompleto.push({
      nomCompleto:this.nombres[i],
      contacto:this.contacto[i],
      direccion:this.direcciones[i]
    });
}
console.log(this.clientesCompleto);
}

  clientes;
  traerClientes(){
    this.http.verClientes().then(
      (data)=>{
        console.log("Clientes..");
        console.log(data);
        this.clientes=data;
        this.clientes=this.clientes.usuarios;
        console.log("llenado...");
        console.log(this.clientes);
        this.getNombres();
      },(error)=>{
        console.log("ERROR "+JSON.stringify(error));
      }
    );
  }
  ngOnInit() {
  }

}
