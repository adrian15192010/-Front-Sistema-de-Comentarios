import { Component, input, output } from '@angular/core';
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
   login = output<any>();

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

  haveYourReaction() : boolean{

  const amI =  this.respuesta().reaccionList.find((reaccion : any)=> reaccion.userId === this.loginService.userId)

    if(amI){
      return true
    }

    return false

  }

  createRespuestaToRespuesta(){
    this.respuestaService.createRespuestaToRespuesta(this.respuesta().id)?.subscribe({
      next:(data)=>{
        this.respuesta().respuestaList.push(data)
        this.login.emit(data)
      }
    })
  }

}
