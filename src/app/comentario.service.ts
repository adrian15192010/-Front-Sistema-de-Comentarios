import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

   
   constructor(private http: HttpClient, public loginService: LoginService) { }

   createComentario(publicacionId : any){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

     const text = prompt("comenta !")

      if(!text) return

  return this.http.post<any>(`http://localhost:8030/api/comentario/create/${publicacionId}`,{text: text},
   {headers : headers });
   }

   getRespuestas(comentarioId : any){

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

  return this.http.get<any[]>(`http://localhost:8030/api/respuesta/comentario/respuestas?id=${comentarioId}`,
   {headers : headers });

  }

  reaccionar(comentarioId: any){

   console.log(this.loginService.toke) 
    
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

  return this.http.post<any>(`http://localhost:8030/api/reaccion/create?id_comentario=${comentarioId}`,{},
   {headers : headers });
   
  }




}
