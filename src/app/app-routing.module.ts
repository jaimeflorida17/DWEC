import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InformesComponent } from './informes/informes.component';
import { PasswordComponent } from './password/password.component';
import { DeleteComponent } from './delete/delete.component';
import { DetallesproductosComponent } from './detallesproductos/detallesproductos.component';
import { DetallesusuariosComponent } from './detallesusuarios/detallesusuarios.component';
import { AltausuariosComponent } from './altausuarios/altausuarios.component';
import { AltaproductosComponent } from './altaproductos/altaproductos.component';
import { CambiarpasswordComponent } from './cambiarpassword/cambiarpassword.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'informes', component: InformesComponent},
  {path: 'detallesproductos/:id', component: DetallesproductosComponent},
  {path: 'detalleUsuarios/:id', component: DetallesusuariosComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'altaUsuarios', component: AltausuariosComponent},
  {path: 'altaproductos', component: AltaproductosComponent},
  {path: 'cambiarpassword', component: CambiarpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }