import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from "rxjs";

// variables de configuración
import { environment } from '../environments/environment';

// modelos
import { Film } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  public urlApi = environment.urlApi;

  constructor(private http: HttpClient) {

  }

  getFilms(path: string): Observable<Film[]> {
    return this.http.get<Film[]>(this.urlApi + path);
  }
}
