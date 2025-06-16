import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';
import { PublicacionComponent } from '../../components/publicacion/publicacion.component';

@Component({
  selector: 'app-bandeja',
  imports: [HeaderComponent, PublicacionComponent],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.css'
})
export class BandejaComponent {

  publicacionesList : any[] = []

  constructor(public publicacionService: PublicacionService){}

  getPublicaciones(){
    this.publicacionService.getPublicaciones().subscribe({
      next: (data)=>{
        this.publicacionesList = data;
      }
    })
  }

}
