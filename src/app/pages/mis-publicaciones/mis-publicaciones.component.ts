import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';

@Component({
  selector: 'app-mis-publicaciones',
  imports: [HeaderComponent],
  templateUrl: './mis-publicaciones.component.html',
  styleUrl: './mis-publicaciones.component.css'
})
export class MisPublicacionesComponent implements OnInit{

mis_publicaciones : any = []

constructor(public publicacionService : PublicacionService){}

ngOnInit(): void {

    console.log("hola mundo")

    this.getMyPublicaciones()
}


getMyPublicaciones(){

  this.publicacionService.getMyPublicaciones().subscribe({
    next: (data)=>{
        this.mis_publicaciones = data
    },
    error: (e)=>{

    }
  })

}

deletePublicacion(e: any){

const publicacionId = e.target?.getAttribute('data-id')

this.publicacionService.deletePublicacion(publicacionId).subscribe({
  next: (data : any)=>{

    alert(data.mensaje)
    e.target?.parentElement.classList.add("none")
    console.log(e.target?.parentElement)
  }
})

}


}
