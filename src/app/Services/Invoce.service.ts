import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseLogin } from '../modelos/ResponseLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../enviroment/Enviroment';
import {Observable} from 'rxjs';
import { Invoce } from '../modelos/Invoce';

@Injectable({
  providedIn: 'root'
})
export class InvoceService {
endPoint : string = urls.endPoint
url : string = this.endPoint + "facturacion/"
  constructor(private http : HttpClient) { }
  addInvoce(model : Invoce) : Observable<any>{
    const header = this.headers()
    return this.http.post<any>(`${this.url}facturarProducto`,model, {headers: header})
  }
  headers(): HttpHeaders {
    const token = localStorage.getItem('Token');
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      return new HttpHeaders();
    }
  }
}
