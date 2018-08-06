import { Routes, RouterModule } from "@angular/router";
import { NgModule, ModuleWithProviders } from '@angular/core';

// componentes
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { PeliculaComponent } from "./pelicula/pelicula.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "peliculas",
    children: [
      { path: '', redirectTo: 'listado', pathMatch: 'full' },
      { path: 'listado', component: ListComponent },
      { path: 'ver/:id', component: PeliculaComponent }
    ]
  },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}