import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearcategoriasRoutingModule } from './crearcategorias-routing.module';
import { CrearcategoriasComponent } from './crearcategorias.component';


@NgModule({
  declarations: [
    CrearcategoriasComponent
  ],
  imports: [
    CommonModule,
    CrearcategoriasRoutingModule
  ]
})
export class CrearcategoriasModule { }
