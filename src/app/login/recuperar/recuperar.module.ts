import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
import { RecuperarRoutingModule } from './recuperar-routing.module';
import { RecuperarComponent } from './recuperar.component';


@NgModule({
  declarations: [
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    RecuperarRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecuperarModule { }
