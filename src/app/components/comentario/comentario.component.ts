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
   respuestas : any = [];
   respuestasVisible : boolean = false

   constructor(public comentarioService: ComentarioService){}

   
  getRespuestas(){
    this.respuestas = this.comentario().respuestaList;
    this.respuestasVisible = true
  }

  ocultarRespuestas(){
    this.respuestasVisible = false
    this.respuestas = []
  }

}
