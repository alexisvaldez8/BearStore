import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BearStore';


   btnMenu = document.getElementById('btnmenu');
   menu = document.getElementById('menu');
  
  mostrar(){
    'use strict';
    document.getElementById('menu').classList.toggle('mostrar');
  }




}




