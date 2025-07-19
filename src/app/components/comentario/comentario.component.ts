import { Component, input, OnInit } from '@angular/core';
import { RespuestaComponent } from '../respuesta/respuesta.component';
import { ComentarioService } from '../../comentario.service';
import { LoginService } from '../../login.service';
import { RespuestaService } from '../../respuesta.service';


@Component({
  selector: 'app-comentario',
  imports: [RespuestaComponent],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent implements OnInit {

   comentario = input<any>();
   respuestas : any = [];
   respuestasVisible : boolean = false

   constructor(public comentarioService: ComentarioService, public loginService: LoginService, 
    public respuestaService : RespuestaService
   ){
    
   }

   ngOnInit(): void {
       console.log(this.comentario().reaccionList)
   }

   crearRespuesta(){
      this.respuestaService.createRespuesta(this.comentario().id)?.subscribe({
        next: (data)=>{
          this.comentario().respuestaList.push(data)
        }
      })
   }
   

  getRespuestas(){
    this.respuestas = this.comentario().respuestaList;
    this.respuestasVisible = true
  }

  ocultarRespuestas(){
    this.respuestasVisible = false
    this.respuestas = []
  }

  reaccionar(){
    this.comentarioService.reaccionar(this.comentario().id).subscribe({
      next: (data: any)=>{
      
          this.comentario().reaccionList.push(data)
          console.log(this.comentario().reaccionList)
        },
        error:(e)=>{
          
        this.comentario().reaccionList = this.comentario().reaccionList.filter(
        (reaccion: any) => reaccion.userId !== this.loginService.userId
        );

        
        console.log(this.comentario().reaccionList)
      }
    })
  }

  haveYourReaction() : boolean{

  const amI =  this.comentario().reaccionList.find((reaccion : any)=> reaccion.userId === this.loginService.userId)

    if(amI){
      return true
    }

    return false

  }

}
