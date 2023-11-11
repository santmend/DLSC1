import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../enviroment/Enviroment';
import {Observable} from 'rxjs';
import { Product } from '../modelos/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
endPoint : string = urls.endPoint
url : string = this.endPoint + "producto/"
  constructor(private http : HttpClient) { }

  addProduct(model : Product) : Observable<Product>{
    const header = this.headers()
    return this.http.post<Product>(`${this.url}guardarproducto`,model, {headers: header})
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}listar`)
  }

  deleteProdruct(id : number): Observable<any>{
    const header = this.headers()
    return this.http.delete<any>(`${this.url}eliminarproducto?id=${id}`, { headers: header });
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
