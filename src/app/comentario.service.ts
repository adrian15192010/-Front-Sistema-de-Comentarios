import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

   token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA4MDI2MjUsImV4cCI6MTc1MTQwNzQyNX0.GZZnXxfjSAOMOc7XdnLTH0oPWBF9r75vlDQg7JVxwGc1kYmLpBWQbWIKHYRF1oww'; // Reemplázalo con tu token real
   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  
   constructor(private http: HttpClient) { }


   getRespuestas(comentarioId : any){

  return this.http.get<any[]>(`http://localhost:8030/api/respuesta/comentario/respuestas?id=${comentarioId}`,
   {headers : this.headers });

  }




}
