import { Component, input } from '@angular/core';
import { RespuestaService } from '../../respuesta.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-respuesta',
  imports: [],
  templateUrl: './respuesta.component.html',
  styleUrl: './respuesta.component.css'
})
export class RespuestaComponent {

   respuesta = input<any>();
   respuestas : any = [];

   constructor(public respuestaService: RespuestaService, public loginService: LoginService){}


  reaccionar(){
    this.respuestaService.reaccionar(this.respuesta().id).subscribe({
      next:(data)=>{
         
        this.respuesta().reaccionList.push(data)

      },
      error: (e)=>{

         this.respuesta().reaccionList = this.respuesta().reaccionList.filter(
        (reaccion: any) => reaccion.userId !== this.loginService.userId
        );

      }
    })
  }


}
