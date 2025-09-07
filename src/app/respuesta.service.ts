import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http: HttpClient, public loginService: LoginService) { }

  

  reaccionar(respuestaId: any){

   console.log(this.loginService.toke) 
    
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

  return this.http.post<any>(`http://localhost:8030/api/reaccion/create/toRespuesta?id_respuesta=${respuestaId}`,{},
   {headers : headers });
   
  }


  createRespuesta(comentarioId : any){

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

     const text = prompt("reponde !")

      if(!text) return

    return this.http.post<any>(`http://localhost:8030/api/respuesta/comentario/create/${comentarioId}`,{text: text},
   {headers : headers });

  }

  createRespuestaToRespuesta(respuestaId : any){

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

     const text = prompt("reponde !")

      if(!text) return

    return this.http.post<any>(`http://localhost:8030/api/respuesta/respuesta/create/${respuestaId}`,{text: text},
   {headers : headers });

  }


}
