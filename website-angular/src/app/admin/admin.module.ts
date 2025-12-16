import { Routes, provideRouter } from '@angular/router';
import { adminRoutes } from './admin-routing.module';

export const adminAppRoutes: Routes = adminRoutes;

export function provideAdminModule() {
  return provideRouter(adminRoutes);
}
