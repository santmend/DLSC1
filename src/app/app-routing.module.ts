import { ProductosComponent } from './paginas/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './TestSErvices/test/test.component';
import {GuardAdmin } from './Guards/Admin';
import{GuardEmple} from './Guards/Emple';
import{GuardClient} from './Guards/Client';


const routes: Routes = [
  { path: 'productos', loadChildren: () => import('./paginas/productos/productos.module').then(m => m.ProductosModule), canActivate: [GuardClient]},
  { path: 'acerca', loadChildren: () => import('./paginas/acerca/acerca.module').then(m => m.AcercaModule) },
  { path: 'login', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./login/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'recuperar', loadChildren: () => import('./login/recuperar/recuperar.module').then(m => m.RecuperarModule) },
  { path: 'inicio', loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioModule)},
  { path: 'crearproductos', loadChildren: () => import('./admin/crearproductos/crearproductos.module').then(m => m.CrearproductosModule), canActivate:[GuardAdmin || GuardEmple ] },
  { path: 'crearcategorias', loadChildren: () => import('./admin/crearcategorias/crearcategorias.module').then(m => m.CrearcategoriasModule), canActivate:[GuardAdmin || GuardEmple] },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
