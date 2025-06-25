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
  fechaInicio: FormControl;                        
  fechaFin: FormControl;                    
  nombre: FormControl;
  tipo: FormControl  
  
constructor(){
    this.fechaInicio = new FormControl(""),           
    this.fechaFin = new FormControl(""),        
    this.nombre = new FormControl(""),
    this.tipo = new FormControl(""),        
                                                    
    this.eventoForm = new FormGroup({
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      nombre: this.nombre,
      tipo: this.tipo
    })          
}

send(){}


}
