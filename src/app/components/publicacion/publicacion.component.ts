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

  constructor(public publicacionService: PublicacionService){}

  ngOnInit(): void {}

  getComentarios(){
    this.publicacionService.getComentarios(this.publicacion().id).subscribe({
      next: (comentarios)=>{
        this.comentarios = comentarios
      }
    })
    this.comentariosVisible = true
  }

  ocultarComentarios(){
    this.comentariosVisible = false
    this.comentarios = []
  }

  aviso(e: any){
  const isChecked = (e.target as HTMLInputElement).checked;
  console.log(isChecked); // true o false
  }



}
