import { Routes } from '@angular/router';
import { DashboardPageComponent } from './Features/Dashboard/Dashboard_Page/Dashboard_Page_Component';
import { NotFoundComponent } from './Features/Not_Found/Not_Found_Component';
import { AuthPageComponent } from './Features/Public/Auth_Page/Auth_Page_Component';
import { HomePageComponent } from './Features/Public/Home_Page/Home_Page_Component';
import { PublicLayoutComponent } from './Layouts/(Public)/Public_Layout_Component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
      },
      {
        path: 'auth',
        component: AuthPageComponent,
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
