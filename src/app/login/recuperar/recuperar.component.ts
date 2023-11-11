import { Component , Injectable, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Contra } from 'src/app/modelos/restablecer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css'],
})

export class RecuperarComponent implements OnInit {
 
  recupForm : FormGroup;

  constructor(private _userService : UserService, private _fBuild : FormBuilder, private rout : Router){

    this.recupForm = this._fBuild.group({
      correo: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void { 
  }

  onrecuperarContra(){
    console.log()
  }

  onClick(){
    const model : Contra = {
      correo : this.recupForm.value.correo  
    }

  this._userService.recuperarContra(model).subscribe({
    next: (data) => {
    console.log("Respusta", data)
    if(data.success){
      this.rout.navigate(['login'])
      
    }
  },error:(e) => {
    console.log("Error Consulta",e)
  }
 })
}



}
