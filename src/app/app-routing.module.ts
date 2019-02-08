import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './verwalten/home.component';
import { OrderCoffeeComponent } from './order-coffee/order-coffee.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  {
    path: '',
    component: StartseiteComponent
  },
  {
    path: 'startseite',
    component: StartseiteComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'orderCoffee',
    component: OrderCoffeeComponent
  },
  {
    path: '**',
    component: StartseiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, OrderCoffeeComponent, StartseiteComponent];
