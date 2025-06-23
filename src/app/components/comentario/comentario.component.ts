import { Component, input, OnInit } from '@angular/core';
import { RespuestaComponent } from '../respuesta/respuesta.component';
import { ComentarioService } from '../../comentario.service';

@Component({
  selector: 'app-comentario',
  imports: [RespuestaComponent],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent {

   comentario = input<any>();
   respuestas : any = []

   constructor(public comentarioService: ComentarioService){}

   


  getRespuesta(){
    this.comentarioService.getRespuestas(this.comentario().id).subscribe({
      next: (data)=>{
        this.respuestas = data
      }
    })
  }

}
