import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  toke: string = ""
  username: string = ""
  userId : any = "" 

  constructor(private http: HttpClient) { }

  register(data : any){
    return this.http.post<any[]>(`http://localhost:8050/api/auth/register`, data);
  }

  login(data : any){
     return this.http.post<any[]>(`http://localhost:8050/api/auth/login`, data);
  }

  GetUserData(token : string){
     return this.http.get<any>(`http://localhost:8050/api/auth/is-token-valid/${token}`);
  }

}
