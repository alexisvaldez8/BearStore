import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeccionPComponent } from './seccion-p/seccion-p.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../app/material';
import { CuentaComponent } from './cuenta/cuenta.component';

const routes:Routes=[
      {path: '', component:InicioComponent},
      {path: 'seccion', component:SeccionPComponent},
      {path: 'producto', component:ProductoComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    SeccionPComponent,
    FooterComponent,
    ProductoComponent,
    CarritoComponent,
    CuentaComponent
  ],
  entryComponents: [CarritoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
