import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { About } from './about/about';
import { Movie } from './movie/movie';

export const routes: Routes = [
    {path: '', component: Home, title: "Home"},
    {path: 'login', component: Login, title: "Login"},
    {path: 'signup', component: Signup, title: "Signup"},
    {path: 'about', component: About, title: "About"},
    {path: 'movie/:path', component: Movie, title: "Movie"},
    {path: '**', redirectTo: ''}
];
