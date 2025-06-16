import { Component, input } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  imports: [],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent {

  publicacion = input<any>();



}
