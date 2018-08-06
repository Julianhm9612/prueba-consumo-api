import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// servicio
import { FilmsService } from '../films.service';

// modelos
import { Film } from '../models/film';

// animaciones
import { routerTransition } from '../app.routing.animation';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PeliculaComponent implements OnInit {
  public pelicula: Film;
  public idPelicula: string;

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService
  ) {
    this.idPelicula = this.route.snapshot.params.id;
    this.pelicula = {
      id: '',
      title: '',
      description: '',
      director: '',
      producer: '',
      release_date: '',
      rt_score: '' 
    };
  }

  ngOnInit() {
    this.getFilm(this.idPelicula);
  }

  /**
   * Consultar película seleccionada
   * @param ave 
   */
  getFilm(ave: any) {
    this.filmsService.getFilm('films/', this.idPelicula)
      .subscribe(
        res => this.pelicula = res
      );
  }

}
