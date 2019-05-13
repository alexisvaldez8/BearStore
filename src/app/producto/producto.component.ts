import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  nombreProducto:String;
  precioProducto="$269.00";

  descripcionP="• Playera manga corta, cuello redondo • Estampado en serigrafía sin tacto • 50% algodón 50% poliéster  • Hecho en México"

  
  ngOnInit() {
  }

}
