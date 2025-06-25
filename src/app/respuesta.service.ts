import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http: HttpClient, public loginService: LoginService) { }

  token : any = "eyJhbGciOiJIUzM4NCJ9.eyJuYW1lIjoiZGllZ28iLCJzdWIiOiJhZHJpYW4xNTE5MjAxMEBnbWFpbC5jb20iLCJpYXQiOjE3NTA3MTAxMzUsImV4cCI6MTc1MTMxNDkzNX0.jTW19j0ImFWY3drlV_2xpT84G2kwraQ6fq5dWGSlkOZHggG5EDQV8SX7NrLFabkZ"


}
