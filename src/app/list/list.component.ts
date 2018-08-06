import { Component, OnInit, ViewChild } from '@angular/core';

// angular material
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';

// servicio
import { FilmsService } from '../films.service';

// modelos
import { Film } from '../models/film';

// animaciones
import { routerTransition } from '../app.routing.animation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ListComponent implements OnInit {
  public dataSource: MatTableDataSource<Film>;
  public displayedColumns: string[] = ['title', 'director', 'producer', 'release_date', 'rt_score', 'detalle', 'ver'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private filmsService: FilmsService,
    public snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit() {
    // consultar películas
    this.filmsService.getFilms('films').subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    
  }

  /**
   * Filtro de la tabla
   * @param filterValue 
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /**
   * Abrir modal
   * @param message 
   * @param action 
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }
}
