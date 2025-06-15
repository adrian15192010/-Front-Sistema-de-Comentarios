import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BandejaComponent } from './pages/bandeja/bandeja.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BandejaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comentario-proyect';
}
