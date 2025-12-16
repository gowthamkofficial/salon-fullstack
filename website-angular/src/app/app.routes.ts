import { Routes } from '@angular/router';
import { adminAppRoutes } from './admin/admin.module';

export const routes: Routes = [
    {
        path: 'admin',
        children: adminAppRoutes
    },
    {
        path:'',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
    }
];
