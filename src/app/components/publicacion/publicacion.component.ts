import { Component, input, OnInit } from '@angular/core';
import { PublicacionService } from '../../publicacion.service';
import { ComentarioComponent } from '../comentario/comentario.component';

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
  reaccionesList : any = []

  constructor(public publicacionService: PublicacionService){}

  ngOnInit(): void {
    (document.querySelector(`${this.publicacion().id}_inputReaction`) as HTMLInputElement).checked = this.publicacion().haveYourReaction;
    console.log(document.querySelector(`${this.publicacion().id}_inputReaction`))
  }

  getComentarios(){
    this.publicacionService.getComentarios(this.publicacion().id).subscribe({
      next: (comentarios)=>{
        this.comentarios = comentarios
        this.reaccionesList = this.comentarios().reaccionList
        
      }
    })
    this.comentariosVisible = true
  }

  ocultarComentarios(){
    this.comentariosVisible = false
    this.comentarios = []
  }

  reaccionar(e: any){
  const isChecked = (e.target as HTMLInputElement).checked;
  console.log(isChecked); // true o false

  this.publicacionService.reaccionar(this.publicacion().id).subscribe({
    next:(data)=>{

      console.log(data)
      this.reaccionesList = data
      console.log(this.reaccionesList)
      
    },
    error: (e)=>{
      console.log(e)
    }
  })  

  }



}
