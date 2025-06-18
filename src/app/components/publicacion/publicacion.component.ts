import { Component, input, OnInit } from '@angular/core';
import { PublicacionService } from '../../publicacion.service';

@Component({
  selector: 'app-publicacion',
  imports: [],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent implements OnInit{

  publicacion = input<any>();
  comentarios : any = []

  constructor(public publicacionService: PublicacionService){}

  ngOnInit(): void {}

  getComentarios(){
    this.publicacionService.getComentarios(this.publicacion().id).subscribe({
      next: (comentarios)=>{
        this.comentarios = comentarios
      }
    })
  }

  aviso(){
    console.log(this.comentarios)
  }

}
