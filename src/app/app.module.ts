import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
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
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DatosusuarioComponent } from './datosusuario/datosusuario.component';
import { AltaProductosComponent } from './alta-productos/alta-productos.component';
import { CambiarcontrasenaComponent } from './cambiarcontrasena/cambiarcontrasena.component';
import { CompletarcompraComponent } from './completarcompra/completarcompra.component';
import { EnvioPagoComponent } from './envio-pago/envio-pago.component';
import { FinalizarpedidoComponent } from './finalizarpedido/finalizarpedido.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ModificarproductosComponent } from './modificarproductos/modificarproductos.component';

const routes:Routes=[
      {path: '', component:InicioComponent, pathMatch:"full"},
      {path: 'productos/:genero/:seccion', component:SeccionPComponent},
      {path: 'producto/:idproducto', component:ProductoComponent},
      {path: 'pedidos/:idusuario', component:PedidosComponent},
      {path: 'contacto', component:ContactoComponent},
      {path: 'datos-usuario/:idusuario', component:DatosusuarioComponent},
      {path: 'alta-productos', component:AltaProductosComponent},
      {path: 'cambiar-contrasena/:idusuario', component:CambiarcontrasenaComponent},
      {path: 'completar-compra', component:CompletarcompraComponent},
      {path: 'envio-pago', component:EnvioPagoComponent},
      {path: 'fin-pedido', component:FinalizarpedidoComponent},
      {path: 'clientes', component:ClientesComponent},
      {path: 'modificar-producto', component:ModificarproductosComponent},
  
]
RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'});

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    SeccionPComponent,
    FooterComponent,
    ProductoComponent,
    CarritoComponent,
    CuentaComponent,
    PedidosComponent,
    ContactoComponent,
    DatosusuarioComponent,
    AltaProductosComponent,
    CambiarcontrasenaComponent,
    CompletarcompraComponent,
    EnvioPagoComponent,
    FinalizarpedidoComponent,
    ClientesComponent,
    ModificarproductosComponent
  ],
  entryComponents: [CarritoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RecaptchaModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
