import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

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
  
  
constructor(){
    this.email = new FormControl(""),           
    this.password = new FormControl(""),        
                                                        
    this.data = new FormGroup({
      email: this.email,
      password: this.password
    })          
}

send(){

console.log(this.data.value);
const evento = this.data.value

}



}
