import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient, public loginService: LoginService) { }

  

  getPublicaciones(pageNumber : any){

  

  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

  return this.http.get<any[]>(`http://localhost:8040/api/publicacion/all?pagina=${pageNumber}`,
   { headers });

  }

  getComentarios(publicacionId : any){

  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

  return this.http.get<any[]>(`http://localhost:8030/api/comentario/all/${publicacionId}`,
   { headers });

  }

  reaccionar(publicacionId : any){

  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

   const body = new HttpParams()
    .set('id_publicacion', publicacionId.toString());

  return this.http.post<any[]>(`http://localhost:8040/api/reaccion/create?id_publicacion=${publicacionId}`,
   body.toString(), 
   { headers });

  }

  createPublicacion(text : any): any{

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

    return this.http.post<any>(`http://localhost:8040/api/publicacion/create`,
      {text}, 
    {headers})
  }

  getTotalPages(){
    return this.http.get<any>(`http://localhost:8040/api/publicacion/size`);
  }

  getMyPublicaciones(){

  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

  return this.http.get<any[]>(`http://localhost:8040/api/publicacion/my`,
   { headers });

  }

  deletePublicacion(publicacionId : any){

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.loginService.toke}`);

  return this.http.delete<any>(`http://localhost:8040/api/publicacion/delete?id=${publicacionId}`,
   { headers });

  }

}
