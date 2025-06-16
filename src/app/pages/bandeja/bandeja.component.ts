import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';

@Component({
  selector: 'app-bandeja',
  imports: [HeaderComponent],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.css'
})
export class BandejaComponent {

  publicacionesList : any[] = []

  constructor(public publicacionService: PublicacionService){}

  getPublicaciones(){
    
  }

}
