import { ForgotModule } from './forgot/forgot.module';
import { LoginGuard } from './../guards/login.guard';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index.component';
import { Route } from '@angular/router';


export const IndexRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent,
        canActivate: [LoginGuard],
        children: [
            { 
                path: 'login', 
                loadChildren: () =>
                  import('../index/login/login.module').then(
                    m => m.LoginModule
                )
            },
            { 
                path: 'signup', 
                loadChildren: () =>
                  import('../index/signup/signup.module').then(
                    m => m.SignupModule
                )
            },
            { 
                path: 'forgot', 
                loadChildren: () =>
                  import('../index/forgot/forgot.module').then(
                    m => m.ForgotModule
                )
            }
        ]
    }
];