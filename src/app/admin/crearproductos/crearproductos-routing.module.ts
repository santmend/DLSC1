import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearproductosComponent } from './crearproductos.component';

const routes: Routes = [{ path: '', component: CrearproductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearproductosRoutingModule { }
