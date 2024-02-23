import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent}, // main home page with article list
    { path: 'user/:id', component: UserComponent}, // user profile page
    { path: '**', component: HomeComponent }
];
