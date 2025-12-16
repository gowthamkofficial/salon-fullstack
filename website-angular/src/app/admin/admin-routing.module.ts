import { Routes } from '@angular/router';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { StaffComponent } from './staff/staff.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { IncomeComponent } from './reports/income/income.component';
import { ExpenseComponent } from './reports/expense/expense.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'reports/income', component: IncomeComponent },
      { path: 'reports/expense', component: ExpenseComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent }
];
