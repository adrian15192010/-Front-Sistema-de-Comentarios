import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

   token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA3MTAxMzUsImV4cCI6MTc1MTMxNDkzNX0.jTW19j0ImFWY3drlV_2xpT84G2kwraQ6fq5dWGSlkOZHggG5EDQV8SX7NrLFabkZ'; // Reemplázalo con tu token real
   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  
   constructor(private http: HttpClient) { }


   getRespuestas(comentarioId : any){

  return this.http.get<any[]>(`http://localhost:8030/api/respuesta/comentario/respuestas?id=${comentarioId}`,
   {headers : this.headers });

  }




}
