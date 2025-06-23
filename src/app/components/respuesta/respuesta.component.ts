import { Component, input } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  imports: [],
  templateUrl: './respuesta.component.html',
  styleUrl: './respuesta.component.css'
})
export class RespuestaComponent {

   respuesta = input<any>();

}
