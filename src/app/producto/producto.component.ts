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
        this.dmediana=this.producto[0].stockmediana;
        this.dgrande=this.producto[0].stockgrande;
        this.dextragrande=this.producto[0].stockextragrande;
        console.log(this.producto);
      },(error)=>{
        console.log("ERROR "+JSON.stringify(error));
      }
    );
  }
disable;
  comprobarDisponibilidad(){
    if(this.dchica==0||this.dchica==null){
      this.disable='disabled';
    }
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
