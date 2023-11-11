import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpHeaders
import { urls } from '../enviroment/Enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  endPoint: string = urls.endPoint;
  url: string = this.endPoint + "usuario/";

  constructor(private http: HttpClient) { }

  listForRol(rol: string): Observable<any> {
    const headers = this.headers(); // Obtener los encabezados con el token
    return this.http.get<any>(`${this.url}listarPorRol?rol=${rol}`, { headers })
  }

  updateRol(idUsuario: number, nuevoRol: string): Observable<any> {
    const headers = this.headers(); // Obtener los encabezados con el token
    return this.http.put<any>(`${this.url}cambiarRol?idUsuario=${idUsuario}&nuevoRol=${nuevoRol}`, null, { headers });
  }

  deleteUser(idUsuario: number): Observable<any> {
    const headers = this.headers(); // Obtener los encabezados con el token
    return this.http.post<any>(`${this.url}eliminar?idUsuario=${idUsuario}`, null, { headers });
  }

  headers(): HttpHeaders {
    const token = localStorage.getItem('Token');
    if (token) {
      // Configurar un objeto de encabezado con el token
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      // En caso de que no haya token, puedes devolver un HttpHeaders vacío o manejar el caso apropiadamente.
      return new HttpHeaders();
    }
  }
}
