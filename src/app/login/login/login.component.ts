import { Component, Injectable, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { LoginI } from 'src/app/modelos/login.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm : FormGroup;



      constructor(private _loginService : LoginService, private _fBuild : FormBuilder, private rout : Router){

        this.loginForm = this._fBuild.group({
          correo: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
        })
      }

      ngOnInit(): void { 


      }

      onLogin()
      {
        console.log()
      }
      onClick(){
        const model : LoginI = {
          correo : this.loginForm.value.correo ,
          password : this.loginForm.value.password
        }

     this._loginService.Login(model).subscribe({
      next: (data) => {
        console.log("Respusta", data)
        if(data.success){
          this.rout.navigate(['inicio'])
          console.log("Result", data.result)
          localStorage.setItem("Token",data.result);
          localStorage.setItem("Rol", data.rol)
          console.log("Rol ",data.rol)
        //  let rol = localStorage.getItem("Rol");
        }
      },error:(e) => {
        console.log("Error Consulta",e)
      }
     })
    }
}
