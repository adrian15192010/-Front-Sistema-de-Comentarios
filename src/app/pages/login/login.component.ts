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

  
  dataRegister : FormGroup
  name: FormControl                       
  email: FormControl;                        
  password: FormControl; 
  
  data: FormGroup;
  email_: FormControl;                        
  password_: FormControl;   
  
  
constructor(public loginService: LoginService, private router : Router){

    this.email = new FormControl(""),           
    this.password = new FormControl(""),
    this.name = new FormControl(""),       
    
    this.email_ = new FormControl(""),           
    this.password_ = new FormControl(""),
      
                                                
    this.dataRegister = new FormGroup({
      name : this.name,
      email: this.email,
      password: this.password
    })    

    this.data = new FormGroup({
      email_: this.email_,
      password_: this.password_
    })    
    
}

register(){

  const data = this.dataRegister.value

  this.loginService.register(data).subscribe({
    next : (data)=>{
      console.log(data)
        alert("Usuario Creado Exitosamente")
        this.dataRegister.reset()
    },
    error : (e)=>{
      console.log(e)
        alert("Error: El usuario ya existe")
    }
  })


}

send(){
console.log(this.data.value);
const data = this.data.value

this.loginService.login(data).subscribe({
  next: (toke : any)=>{

    console.log(toke)

    this.loginService.toke = toke.access_token
    
    this.SetUserData(this.loginService.toke)

    this.router.navigate(['bandeja']);
    this.data.reset()
  },error: (e)=>{
    alert("Error: error de usuario o de contraseña")
  }
})

}

SetUserData(toke : string){
  this.loginService.GetUserData(toke).subscribe({
    next:(data)=>{
      this.loginService.username = data.email
      this.loginService.userId = data.userId
    }
  })
}



}
