import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:5000/api/empleados';

  constructor(private http: HttpClient) { }

  crearEmpleado(empleado: FormData): Observable<any> {
    return this.http.post(this.apiUrl, empleado);
  }

  obtenerEmpleados(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerEmpleadoPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  actualizarEmpleado(id: string, empleado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado);
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  obtenerDepartamentos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/departamentos`);
  }

  obtenerPuestos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/puestos`);
  }

  obtenerParentescos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/parentescos`);
  }

  obtenerActividades(): Observable<any> {
    return this.http.get(`${this.apiUrl}/actividades`);
  }
}
