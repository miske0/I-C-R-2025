import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { About } from './about/about';
import { Details } from './details/details';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'signup', component: Signup},
    {path: 'about', component: About},
    {path: 'details/:id', component: Details}
];
