import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

   token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA1MTU1MDcsImV4cCI6MTc1MTEyMDMwN30.vNfvUoqTHYbbwvoBmTWkUqQoPnTdo0UOIxct1mjA16Py6T4g5OVuX6TT0jMQv6Ak'; // Reemplázalo con tu token real
   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  
   constructor(private http: HttpClient) { }


   getRespuestas(comentarioId : any){

  return this.http.get<any[]>(`http://localhost:8030/api/respuesta/comentario/respuestas?id=${comentarioId}`,
   {headers : this.headers });

  }




}
