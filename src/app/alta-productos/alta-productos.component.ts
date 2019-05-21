import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';


@Component({
  selector: 'app-alta-productos',
  templateUrl: './alta-productos.component.html',
  styleUrls: ['./alta-productos.component.css']
})
export class AltaProductosComponent implements OnInit {

  constructor(public http:ConsultasService) { 
    this.construirFecha();
  }


  nombreproducto:String;
  stock:String;
  precio:String;
  talla:String;
  genero:String;
  color:String;
  fecha;

  n =  new Date();
  //Año
  y = this.n.getFullYear();
  //Mes
  m = this.n.getMonth() + 1;
  //Día
  d = this.n.getDate();


construirFecha(){  
if(this.m<10){
  this.fecha=this.y + "-0" + this.m + "-" + this.d;
}else{
  this.fecha=this.y + "-" + this.m + "-" + this.d;
}
return this.fecha;
}
  
registroProductos(){
  if(this.nombreproducto==null||this.stock==null||this.precio==null||this.talla==null||this.genero==null||this.color==null||this.fecha==null){
    alert("Completa los campos vacíos");
  }else{
    	this.registroProductobd();
        }
    }

  
registroProductobd(){
  this.http.altaProductos(this.nombreproducto,this.stock,this.precio,this.talla,this.genero,this.color,this.fecha).then(
    (data)=>{
      console.log(data);
      var result=data["registro"];
      console.log(result);
      if(result=="correcto"){
        alert("Producto Agregado con exito!");
        this.nombreproducto="";
        this.stock="";
        this.precio="";
        this.talla="";
        this.genero="";
        this.color="";
      }
    },(error)=>{
      console.log("ERROR "+JSON.stringify(error));
    }
  );
}

  ngOnInit() {
  }

}
