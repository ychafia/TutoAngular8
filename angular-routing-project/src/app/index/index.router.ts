import { LoginGuard } from './../guards/login.guard';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index.component';

export const IndexRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'forgot', component: ForgotComponent }
        ]
    }
];