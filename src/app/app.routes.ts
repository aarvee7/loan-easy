import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export const ROUTES = RouterModule.forRoot(routes, { useHash: true });
