import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

   token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA4MDI2MjUsImV4cCI6MTc1MTQwNzQyNX0.GZZnXxfjSAOMOc7XdnLTH0oPWBF9r75vlDQg7JVxwGc1kYmLpBWQbWIKHYRF1oww'; // Reemplázalo con tu token real
   
  
   constructor(private http: HttpClient, public loginService: LoginService) { }


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
