import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
import { Main } from './main/main.controller';

export const routes: Routes = [
  { path: '', component: Main },
  // { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
];
