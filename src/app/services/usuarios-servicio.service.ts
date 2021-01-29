import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class Usuarios {
  id!: String;
  username!: String;
  password!: String;

}

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicioService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/Usuarios');
  }

  read(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8000/Usuario/' + id);
  }

  create(data: string): Observable<any> {
    return this.httpClient.post('http://localhost:8000/Usuario', data).pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, data: string): Observable<any> {
    return this.httpClient.put('http://localhost:8000/Usuario/' + id, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8000/Usuario/' + id);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${ error.status } \nMessage: ${ error.message }`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

