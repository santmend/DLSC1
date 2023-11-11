import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../enviroment/Enviroment';
import {Observable} from 'rxjs';
import { User } from '../modelos/User';
import { Contra } from '../modelos/restablecer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
endPoint : string = urls.endPoint
url : string = this.endPoint + "usuario/"
  constructor(private http : HttpClient) { }


  //servicio con modelo para nuevo resgistro
  register(model : User) : Observable<User>{
    return this.http.post<User>(`${this.url}registro`, model)
  }



//servicio con modelo para recuperar contraseña
recuperarContra(model: Contra ): Observable<any> {
  return this.http.post<any>(`${this.url}recuperarContrasena`, model);
}





}
