import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { PagecarComponent } from './pagecar/pagecar.component';

const routes: Routes = [
  //Подключаем компонент 'cars-list'.
   //Подключаем компонент 'pagecar/:id' - чтобы переходить к определённому авто.
  {path: "cars-list", component: CarsListComponent},
  {path: "pagecar/:id", component: PagecarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
