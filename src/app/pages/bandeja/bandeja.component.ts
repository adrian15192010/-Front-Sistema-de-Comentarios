import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';
import { PublicacionComponent } from '../../components/publicacion/publicacion.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bandeja',
  imports: [HeaderComponent, PublicacionComponent],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.css'
})
export class BandejaComponent implements OnInit  {

  publicacionesList : any[] = []
  totalPages = 0
  pageNumber = ""

  constructor(public publicacionService: PublicacionService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.getTotalPages()

    this.pageNumber = this.route.snapshot.params['page'];

    if(this.pageNumber){
      this.getPublicaciones(this.pageNumber)
    }else{
      this.getPublicaciones(this.totalPages)
    }

      
  }

  getPublicaciones(pageNumber : any){
    this.publicacionService.getPublicaciones(pageNumber).subscribe({
      next: (data : any[])=>{
        this.publicacionesList = data;
      }
    })
  }

  createPublicacion(){

      const text = prompt("comenta !")

      if(!text) return

    this.publicacionService.createPublicacion(text).subscribe({
      next: (data : any)=>{
        
      }
    })

  }

  getTotalPages(){
     this.publicacionService.getTotalPages().subscribe({
      next: (data)=>{
        this.totalPages = data.totalPages
      }
     })
  }

}
