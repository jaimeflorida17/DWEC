import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReturnComponent } from './return/return.component';
import { DeleteComponent } from './delete/delete.component';
import { PasswordComponent } from './password/password.component';
import { AltaComponent } from './alta/alta.component';
import { InformesComponent } from './informes/informes.component';
import { DetallesproductosComponent } from './detallesproductos/detallesproductos.component';
import { DetallesusuariosComponent } from './detallesusuarios/detallesusuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AltaproductosComponent } from './altaproductos/altaproductos.component';
import { AltausuariosComponent } from './altausuarios/altausuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CambiarpasswordComponent } from './cambiarpassword/cambiarpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    UsuariosComponent,
    ReturnComponent,
    DeleteComponent,
    PasswordComponent,
    AltaComponent,
    InformesComponent,
    DetallesproductosComponent,
    DetallesusuariosComponent,
    AltaproductosComponent,
    AltausuariosComponent,
    CambiarpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
