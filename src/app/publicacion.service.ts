import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }


  getPublicaciones(){

  const token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTAxOTM4MDYsImV4cCI6MTc1MDc5ODYwNn0.KkP6RO9gOe_3QyWZQuohZEUIjjOXIxKHKLZOjucWqeTfnsI-TIuIZkVndusf0K-L'; // Reemplázalo con tu token real
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.get<any[]>(`http://localhost:8040/api/publicacion/all?pagina=0`,
   { headers });

  }

}
