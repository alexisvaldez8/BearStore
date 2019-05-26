import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
idproducto;
idusuario;
cantidad;
tallaS;

talla:string="tallac";
chica:string="chica";
mediana:string="mediana";
grande:string="grande";
extragrande:string="extragrande";
radiochica:String;
radiomediana:String;
radiogrande:String;
radioextragrande:String;
tallaselect:String;
cantidadselect:String;

claseChica: string = "boton__talla";
claseMediana: string = "boton__talla";
claseGrande: string = "boton__talla";
claseExtraGrande: string = "boton__talla";


cambiaEstado() { 
  //this.claseChica = "boton__talla_select";
  console.log("se cambio la clase");
}

verValor(){
  console.log(this.tallaselect);
}

  constructor(public http:ConsultasService,private rutaActiva: ActivatedRoute) {
    

  }
lblchica;
dchica;
dmediana;
dgrande;
dextragrande;
producto;
nombreProducto:String;
precioProducto:String;
  traerProducto(){
    this.http.traerProducto(this.idproducto).then(
      (data)=>{
        console.log("imprime data...");
        console.log(data);
        this.producto=data;
        this.producto=this.producto.producto;
        console.log("llenado...");
        this.dchica=this.producto[0].stockchica;
        this.comprobarChica();
        this.dmediana=this.producto[0].stockmediana;
        this.comprobarMediana();
        this.dgrande=this.producto[0].stockgrande;
        this.comprobarGrande();
        this.dextragrande=this.producto[0].stockextragrande;
        this.comprobarXL();
        console.log(this.producto);
      },(error)=>{
        console.log("ERROR "+JSON.stringify(error));
      }
    );
  }
disable;
  comprobarChica(){
    if(this.dchica==0||this.dchica==null){
      this.claseChica="boton__talla_agotado";
      this.chica="chicas"
      console.log(this.dchica);

    }
  }

  comprobarMediana(){
    if(this.dmediana==0||this.dmediana==null){
      this.claseMediana="boton__talla_agotado";
      this.mediana="medianas";
      console.log(this.dmediana);
    }else{
    }
  }
  comprobarGrande(){
    if(this.dgrande==0||this.dgrande==null){
      this.claseGrande="boton__talla_agotado";
      this.grande="grandes";
      console.log(this.grande);
    }else{
    }
  }

  comprobarXL(){
    if(this.dextragrande==0||this.dextragrande==null){
      this.claseExtraGrande="boton__talla_agotado";
      console.log(this.dextragrande);
      this.extragrande="extragrandes"

    }
  }

  descripcionP="• Playera manga corta, cuello redondo • Estampado en serigrafía sin tacto • 50% algodón 50% poliéster  • Hecho en México"
  productoCarrito = [];

getProducto(){
    this.idusuario=JSON.parse(localStorage.getItem("Sesion"));
    this.idusuario=this.idusuario[0].id_usuario
    console.log("este usuario es "+this.idusuario);
    
    this.idproducto=this.producto[0].idproducto;
    console.log("este producto es "+this.idproducto);

    this.tallaS=this.tallaselect;
    

    this.cantidad=this.cantidadselect;
    if(this.cantidad==undefined){
      this.cantidad='1';
    }else{
      console.log("la cantidad es "+this.cantidad);
    }
    console.log("la cantidad es "+this.cantidad);

    if(this.tallaS==undefined){
      alert("No haz selccionado una talla");
    }else{
      console.log("la talla es "+this.tallaS);
      this.agregarCarrito();
    }
    

}


  agregarCarrito(){
    this.http.agregarCarrito(this.idusuario,this.idproducto,this.tallaS,this.cantidad).then(
      (data)=>{
        console.log(data);
        var result=data["registro"];
        console.log(result);
        if(result=="correcto"){
          alert("Producto Agregado al carrito con exito!");
        }
      },(error)=>{
        console.log("ERROR "+JSON.stringify(error));
      }
    );
  }
  



  ngOnInit() {
    
    this.idproducto=this.rutaActiva.snapshot.params.idproducto;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idproducto = params.idproducto;
      }
    );
    this.traerProducto(); 
    //this.comprobarDisponibilidad();
    
  
  }

}
