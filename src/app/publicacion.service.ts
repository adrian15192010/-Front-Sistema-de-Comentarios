import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }

  token : any = "eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA2Mjg0NDYsImV4cCI6MTc1MTIzMzI0Nn0.q_0A1YWODgZDfKI12XDypA_ahht9bgFMVi6D0L-6ZoJcRFfDZF-8_sqbgqDLlr2n"

  getPublicaciones(){

  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  return this.http.get<any[]>(`http://localhost:8040/api/publicacion/all?pagina=0`,
   { headers });

  }

  getComentarios(publicacionId : any){

  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  return this.http.get<any[]>(`http://localhost:8030/api/comentario/all/${publicacionId}`,
   { headers });

  }

  reaccionar(publicacionId : any){

  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

   const body = new HttpParams()
    .set('id_publicacion', publicacionId.toString());

  return this.http.post<any[]>(`http://localhost:8040/api/reaccion/create?id_publicacion=${publicacionId}`,
   body.toString(), 
   { headers });

  }



}
