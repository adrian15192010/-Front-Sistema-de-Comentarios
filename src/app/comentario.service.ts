import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

   token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA1MTA5NzQsImV4cCI6MTc1MTExNTc3NH0.iOHi9ZC_o5dJj4hfvYP9A2Fg0KV47KJCOdb8y-P87zyso6bXrnMxa2SN8WWWI0LT'; // Reemplázalo con tu token real
   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  
   constructor(private http: HttpClient) { }


   getRespuestas(comentarioId : any){

  return this.http.get<any[]>(`http://localhost:8030/api/respuesta/comentario/respuestas?id=${comentarioId}`,
   {headers : this.headers });

  }




}
