import { Component , Injectable, OnInit} from '@angular/core';
import {UserService} from 'src/app/Services/user.service'
import {FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms'
import {User} from 'src/app/modelos/User'
import {Router} from '@angular/router'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

registroForm : FormGroup;

constructor(private _userService : UserService, private _fBuild : FormBuilder, private rout: Router){

  this.registroForm = this._fBuild.group({

    nombre: new FormControl ('',[Validators.required]),
    telefono: new FormControl ('',[Validators.required]),
    correo: new FormControl ('',[Validators.required]),
    password: new FormControl ('',[Validators.required]),
   // rol: new FormControl ('',[Validators.required])
  })
}

ngOnInit(): void {
  
}
onRegister(){
  console.log()
}

onClick(){


  const id= "";
  const rll ="";
  const model : User = {
    
    idUsuario : id,
    nombre : this.registroForm.value.nombre,
    telefono : this.registroForm.value.telefono,
    correo : this.registroForm.value.correo,
    password : this.registroForm.value.password,
    rol : rll
  }



  this._userService.register(model).subscribe({
    next: (data) => {
      console.log("respuesta", data)
      if(data){
        console.log("consulta: ",data),
        this.rout.navigate(['login'])
      }

  },error:(e) => {
    console.log("Error consulta" , e)
  }
})

}












}
