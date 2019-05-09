import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { MenuComponent} from './menu/menu.component';
import { InicioComponent} from './inicio/inicio.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private router: Router){
		
	}
	title = 'BearStore';


   btnMenu = document.getElementById('btnmenu');
   menu = document.getElementById('menu');
  
  mostrar(){
    'use strict';
    document.getElementById('menu').classList.toggle('mostrar');
  }

  public ngOnInit(){

		





  		}



}




