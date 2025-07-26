import { Routes } from '@angular/router';
import { BandejaComponent } from './pages/bandeja/bandeja.component';
import { LoginComponent } from './pages/login/login.component';
import { MisPublicacionesComponent } from './pages/mis-publicaciones/mis-publicaciones.component';

export const routes: Routes = [
    {path: "bandeja", component: BandejaComponent},
    {path: "bandeja/:page", component: BandejaComponent},
    {path: "", component: LoginComponent},
    {path: "mis", component: MisPublicacionesComponent}
];
