import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }

  token : any = "eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA3NjM1MTQsImV4cCI6MTc1MTM2ODMxNH0.LoKU1DczH8NI9fkN2kXmxWzJOXZ-AxQKSC9z6SO2Gs-wLxc8ZLxm4rIz_IYBOyNf"

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
