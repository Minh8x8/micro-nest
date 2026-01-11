import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SampleComponent } from './sample/sample.component';
import { officerGuard } from '../guards/officer.guard';

export const pagesRoutes: Route[] = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            { path: 'sample', component: SampleComponent },
            {
                path: 'products',
                loadChildren: () =>
                    import('product-app/Routes').then((m) => m.remoteRoutes),
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import('profile-app/ProfilePageWrapper').then(
                        (m) => m.ProfileWrapperComponent
                    ),
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
        canActivate: [officerGuard],
    },
];
