import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }


  getPublicaciones(){

  const token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTAzNjMyODUsImV4cCI6MTc1MDk2ODA4NX0.VLRzRstQnP0wFMxGWm_E1v3Z6tNk5AfSI5rLITv3gTAOID526MB0ZJ1hqk7AAogz'; // Reemplázalo con tu token real
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.get<any[]>(`http://localhost:8040/api/publicacion/all?pagina=0`,
   { headers });

  }

  getComentarios(publicacionId : any){

  const token = 'eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTAyNzY1NzYsImV4cCI6MTc1MDg4MTM3Nn0.QQVMrl_MSrZRTKy0WVcj1IiUv23iKlMJjjvmhiu7N5w-4bN3fP0YA2ostFq7kycs'; // Reemplázalo con tu token real
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.get<any[]>(`http://localhost:8030/api/comentario/all/${publicacionId}`,
   { headers });

  }

}
