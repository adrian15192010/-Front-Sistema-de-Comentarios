import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';
import { PublicacionComponent } from '../../components/publicacion/publicacion.component';

@Component({
  selector: 'app-bandeja',
  imports: [HeaderComponent, PublicacionComponent],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.css'
})
export class BandejaComponent implements OnInit  {

  publicacionesList : any[] = []

  constructor(public publicacionService: PublicacionService){}

  ngOnInit(): void {
      this.getPublicaciones()
  }

  getPublicaciones(){
    this.publicacionService.getPublicaciones().subscribe({
      next: (data : any[])=>{
        this.publicacionesList = data;
      }
    })
  }

  createPublicacion(): void{

    this.publicacionService.createPublicacion().subscribe({
      next: (data)=>{
        this.publicacionesList.push(data);
      }
    })

  }

}
