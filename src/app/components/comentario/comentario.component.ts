import { Component, input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  imports: [],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent {

   comentario = input<any>();

}
