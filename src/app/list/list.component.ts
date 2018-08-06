import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { merge } from 'rxjs';

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
  public displayedColumns: string[] = ['title', 'director', 'producer', 'release_date', 'rt_score'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private filmsService: FilmsService) {
    
  }

  ngOnInit() {
    this.filmsService.getFilms('films').subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
