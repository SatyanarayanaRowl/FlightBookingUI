import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlinesComponent } from './airline/add-airlines/add-airlines.component';
import { AirlineComponent } from './airline/airline.component';
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './booking/history/history.component';
import { HomeComponent } from './home/home.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },{
    path: 'addairline',
    component: AddAirlinesComponent
  },
  {
    path: 'airline',
    component: AirlineComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path: 'addinventory',
    component: AddInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
