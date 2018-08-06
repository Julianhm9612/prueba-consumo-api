import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from "rxjs";

// variables de configuración
import { environment } from '../environments/environment';

// modelos
import { Film } from './models/film';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  public urlApi = environment.urlApi;

  constructor(private http: HttpClient) {

  }

  /**
   * Consultar todas las películas
   * @param path 
   */
  getFilms(path: string): Observable<Film[]> {
    return this.http.get<Film[]>(this.urlApi + path, {headers: headers});
  }

  /**
   * Consultar una sola película
   * @param path 
   * @param pelicula 
   */
  getFilm(path: string, pelicula: Film | string): Observable<Film> {
    const id = typeof pelicula === 'string' ? pelicula : pelicula.id;
    return this.http.get<Film>(this.urlApi + path + id, {headers: headers});
  }
}
