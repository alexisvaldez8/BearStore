import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeccionPComponent } from './seccion-p/seccion-p.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';


const routes:Routes=[
      {path: '', component:InicioComponent},
      {path: 'seccion', component:SeccionPComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    SeccionPComponent,
    FooterComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
