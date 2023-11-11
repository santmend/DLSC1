import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcategoriasComponent } from './crearcategorias.component';

const routes: Routes = [{ path: '', component: CrearcategoriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearcategoriasRoutingModule { }
