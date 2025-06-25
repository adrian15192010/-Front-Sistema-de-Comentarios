import { Routes } from '@angular/router';
import { BandejaComponent } from './pages/bandeja/bandeja.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: "", component: BandejaComponent},
    {path: "login", component: LoginComponent}
];
