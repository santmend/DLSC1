import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { HttpClient } from '@angular/common/http';
import { urls } from '../enviroment/Enviroment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
endPoint : string = urls.endPoint
url : string = this.endPoint + "usuario/"
  constructor(private http : HttpClient) { }
  Login(model : LoginI) : Observable<any>{
    return this.http.post<any>(`${this.url}login`, model)
  }
}
