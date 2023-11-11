import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearproductosRoutingModule } from './crearproductos-routing.module';
import { CrearproductosComponent } from './crearproductos.component';


@NgModule({
  declarations: [
    CrearproductosComponent
  ],
  imports: [
    CommonModule,
    CrearproductosRoutingModule
  ]
})
export class CrearproductosModule { }
