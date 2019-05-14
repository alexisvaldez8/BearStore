import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  tituloNosotros="Bearstore Durango";
  parrafoN="Somos distribuidores de la marca Mascara de Latex©, este sitio y la applicacion movil fueron creados al 100% por los propietarios de la tienda, quienes somos enstudiantes a punto de egresar de la carrera de Ing. en Sistemas Computacionales del Instituto Tecnologico de Durango";
  parrafoD="Cualquier duda, comentario y/o sugerencia la puedes hacer llegar al correo oficial de la tienda bearstoredgo@gmail.com o al telefono 618-804-17-54";
  ngOnInit() {
  }

}
