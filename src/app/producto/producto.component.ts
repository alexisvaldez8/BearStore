import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../consultas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
idproducto;
  constructor(public http:ConsultasService,private rutaActiva: ActivatedRoute) {
    

  }

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
        console.log(this.producto);
        console.log(this.nombreProducto);
      },(error)=>{
        console.log("ERROR "+JSON.stringify(error));
      }
    );
  }

  

  descripcionP="• Playera manga corta, cuello redondo • Estampado en serigrafía sin tacto • 50% algodón 50% poliéster  • Hecho en México"

  
  ngOnInit() {
    
    this.idproducto=this.rutaActiva.snapshot.params.idproducto;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idproducto = params.idproducto;
      }
    );
    this.traerProducto(); 
  }

}
