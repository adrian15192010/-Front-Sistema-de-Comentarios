import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';
import { PublicacionComponent } from '../../components/publicacion/publicacion.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bandeja',
  imports: [HeaderComponent, PublicacionComponent],
  templateUrl: './bandeja.component.html',
  styleUrl: './bandeja.component.css'
})
export class BandejaComponent implements OnInit  {

  publicacionesList : any[] = []
  totalPages: number = 0
  pageNumber: number = 0
 

  constructor(public publicacionService: PublicacionService, private route: ActivatedRoute,  
    private router : Router){
    
  }

  ngOnInit(): void {
   
  this.route.paramMap.subscribe(params => { // para rutas con parametros, ya que no pasa por el constructor()
      //const page = params.get('page');
      this.getTotalPages()
    });


      
  }

  getPublicaciones(pageNumber : any){
    this.publicacionService.getPublicaciones(pageNumber).subscribe({
      next: (data : any[])=>{

          console.log("get")

        this.publicacionesList = data;
      }
    })
  }

  createPublicacion(){

    console.log(this.totalPages)

      const text = prompt("comenta !")

      if(!text) return

    this.publicacionService.createPublicacion(text).subscribe({
      next: (data : any)=>{
        
      }
    })

  }

  getTotalPages(){

     this.publicacionService.getTotalPages().subscribe({
      next: (data)=>{

        this.totalPages = data.totalPages
       
        if(this.route.snapshot.params['page']){

          console.log("pasa en pageNumber")
           const numero : number = parseInt(this.route.snapshot.params['page'])

          this.pageNumber = numero

        this.getPublicaciones(this.pageNumber)

        }else{

          this.pageNumber = this.totalPages - 1

        this.getPublicaciones(this.pageNumber)

        }
        
        console.log("numero de pagina : "+ this.pageNumber)
      }
     })
  }

  atras(){

    this.pageNumber--

    console.log("atras")
    
    this.router.navigate([`bandeja/${this.pageNumber}`]);

     console.log("atras fin")
  }

}
