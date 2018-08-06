import { Routes, RouterModule } from "@angular/router";
import { NgModule, ModuleWithProviders } from '@angular/core';

// componentes
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "**",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}