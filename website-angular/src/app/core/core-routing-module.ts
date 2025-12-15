import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { Products } from './components/products/products';
import { ServicesComponent } from './components/services/services';
import { Staff } from './components/staff/staff';
import { Appointments } from './components/appointments/appointments';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HeroComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'staff',
    component: Staff,
  },
  {
    path: 'appointments',
    component: Appointments,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
