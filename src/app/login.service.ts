import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  toke: string = ""

  constructor(private http: HttpClient) { }

  login(data : any){
     return this.http.post<any[]>(`http://localhost:8050/api/auth/login`, data);
  }

}
