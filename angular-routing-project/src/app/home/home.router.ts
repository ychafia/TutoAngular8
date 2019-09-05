import { UserComponent } from './user/user.component';
import { AuthGuard } from './../guards/auth.guard';
import { HomeComponent } from './home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
export const HomeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate : [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                  import('../home/dashboard/dashboard.module').then(
                    m => m.DashboardModule
                )
            },
            {
                path: 'settings',
                loadChildren: () =>
                  import('../home/settings/settings.module').then(
                    m => m.SettingsModule
                )
            },
            {
                path: 'products',
                loadChildren: () =>
                  import('../home/products/products.module').then(
                    m => m.ProductsModule
                )
            },
            {
                path: 'users',
                loadChildren: () =>
                  import('../home/user/user.module').then(
                    m => m.UserModule
                )
            },
            {
                path: 'user/:username',
                loadChildren: () =>
                  import('../home/user/user.module').then(
                    m => m.UserModule
                )
            },
            {
                path: 'user/:username/:id',
                loadChildren: () =>
                  import('../home/user/user.module').then(
                    m => m.UserModule
                )
            }
        ]
    }
];