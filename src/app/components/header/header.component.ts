import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public loginService: LoginService, private router : Router){}

 logout(){

    const bolsa = confirm("desea cerrar la sesión ?")

    if(!bolsa) return


      this.loginService.logOut().subscribe({
        next: (data)=>{

          alert(data.sesion)
          
          this.router.navigate(['/']);
          
        },error: (data)=>{
          
          console.log("logout no pasa")
          console.log(data)

        }
      })
  }

}
