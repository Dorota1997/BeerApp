import { IngredientsComponent } from './beer/ingredients/ingredients.component';
import { BeerComponent } from './beer/beer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
const routes: Routes = [
  {
    path: 'beer',
    component: BeerComponent
  },
  {
    path: 'ingredients',
    component: IngredientsComponent
  },
  {
    path: '',
    component: BeerComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
