import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  data: FormGroup;                       
  email: FormControl;                        
  password: FormControl;                    
  
  
constructor(public loginService: LoginService, private router : Router){
    this.email = new FormControl(""),           
    this.password = new FormControl(""),        
                                                        
    this.data = new FormGroup({
      email: this.email,
      password: this.password
    })          
}

send(){

console.log(this.data.value);
const data = this.data.value

this.loginService.login(data).subscribe({
  next: (toke : any)=>{
    this.loginService.toke = toke.access_token
    this.router.navigate(['']);
  }
})

}



}
