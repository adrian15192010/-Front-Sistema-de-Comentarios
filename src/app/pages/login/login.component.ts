import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  eventoForm: FormGroup;                       
  email: FormControl;                        
  password: FormControl;                    
  
  
constructor(){
    this.email = new FormControl(""),           
    this.password = new FormControl(""),        
                                                        
    this.eventoForm = new FormGroup({
      email: this.email,
      password: this.password
    })          
}

send(){

console.log(this.eventoForm.value);
const evento = this.eventoForm.value

}



}
