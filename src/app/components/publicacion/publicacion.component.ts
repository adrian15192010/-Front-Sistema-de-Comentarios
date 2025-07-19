import { Component, Input, input, OnInit } from '@angular/core';
import { PublicacionService } from '../../publicacion.service';
import { ComentarioComponent } from '../comentario/comentario.component';
import { PaginacionService } from '../../paginacion.service';
import { ComentarioService } from '../../comentario.service';

@Component({
  selector: 'app-publicacion',
  imports: [ComentarioComponent],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent implements OnInit{

  publicacion = input<any>();
  comentarios : any = []
  comentariosVisible : boolean = false
  

  
  

  constructor(public publicacionService: PublicacionService,
     public paginacionService: PaginacionService,
      public comentarioService: ComentarioService){}

  ngOnInit(): void {
  }

  getComentarios(){
    this.publicacionService.getComentarios(this.publicacion().id).subscribe({
      next: (comentarios)=>{
        this.comentarios = comentarios
      }
    })
    this.comentariosVisible = true
  }

  crearComentario(){

   this.comentarioService.createComentario(this.publicacion().id)?.subscribe({
    next: (data)=>{
      this.comentarios.push(data)
      this.publicacion().sizeComentario++
    }
   })

   }

  ocultarComentarios(){
     console.log(this.publicacion())
    this.comentariosVisible = false
    this.comentarios = []
  }

  reaccionar(e: any){
  const isChecked = (e.target as HTMLInputElement).checked;
  console.log(isChecked); // true o false

  this.publicacionService.reaccionar(this.publicacion().id).subscribe({
    next:(data)=>{
      console.log(data)
      this.publicacion().reaccionList = data 
      this.publicacion().haveYourReaction = !this.publicacion().haveYourReaction
    },
    error: (e)=>{
    this.publicacion().haveYourReaction = !this.publicacion().haveYourReaction
    }
  })  

  }



}
