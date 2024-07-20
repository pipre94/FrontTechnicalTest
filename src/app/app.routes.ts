import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterPersonComponent } from './register-person/register-person.component';
import { RegisterUsersComponent } from './register-users/register-users.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register-person', component: RegisterPersonComponent },
    { path: 'register-user', component: RegisterUsersComponent },
    { path: '**', redirectTo: '' }
  ];
