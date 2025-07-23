import { Component, OnInit, output, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';
import { PublicacionComponent } from '../../components/publicacion/publicacion.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginacionService } from '../../paginacion.service';
import { LoginService } from '../../login.service';

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

  //@ViewChild(PublicacionComponent) hijo!: PublicacionComponent;

  @ViewChildren(PublicacionComponent) hijos!: PublicacionComponent[];

  isDisabled_: boolean = true
  _isDisabled: boolean = true

  

  constructor(public publicacionService: PublicacionService, private route: ActivatedRoute,  
    private router : Router,
    public paginacionService: PaginacionService,
    public loginService : LoginService){
    
  }

  ngOnInit(): void {

      this.getTotalPages()

    /*
  this.route.paramMap.subscribe(params => { // para rutas con parametros, ya que no pasa por el constructor()
      //const page = params.get('page');
      this.getTotalPages()
    });
*/
  }

  getPublicaciones(pageNumber : any){
    this.publicacionService.getPublicaciones(pageNumber).subscribe({
      next: (data : any[])=>{

          console.log("get")

        this.publicacionesList = data.reverse();
        this.isDisabled_ = false

         if(this.paginacionService.pageNumber === 0 && this.paginacionService.totalPages < 2){
          console.log(this.paginacionService.pageNumber)
          this.isDisabled_ = true
          this._isDisabled = true
        } 

    if(this.paginacionService.pageNumber === 0) this.isDisabled_ = true
    if(this.paginacionService.pageNumber < this.paginacionService.totalPages - 1) this._isDisabled = false
          
      }
    })
  }

  createPublicacion(){

    console.log(this.totalPages)

      const text = prompt("publica !")

      if(!text) return

    this.publicacionService.createPublicacion(text).subscribe({
      next: (data : any)=>{

        if(this.publicacionesList.length < 3){  /////// poner "solucion" poner de primero en la lista no push
         // this.getPublicaciones(this.paginacionService.pageNumber)
          this.publicacionesList.push(data)
          alert("pasa")
        }else{
          alert("no pasa")
          if(this.publicacionesList.length > 1) this._isDisabled = false
        }
        
   /////////////////////////////////////////////////////////////////////     
        this.publicacionService.getTotalPages().subscribe({
      next: (data)=>{

        let bolso: number = this.paginacionService.totalPages

        this.paginacionService.totalPages = data.totalPages

        if(bolso != this.paginacionService.totalPages) this._isDisabled = false

        if(this.paginacionService.totalPages < 2){
          this.isDisabled_ = true
          this._isDisabled = true
        }

      }
     })
   /////////////////////////////////////////////////////////////////////
      }
    })

  }

  getTotalPages(){

     this.publicacionService.getTotalPages().subscribe({
      next: (data)=>{

        this.paginacionService.totalPages = data.totalPages
        this.paginacionService.pageNumber = this.paginacionService.totalPages > 0 ? this.paginacionService.totalPages - 1: this.paginacionService.totalPages
        
       

        this.getPublicaciones(this.paginacionService.pageNumber)
       
      }
     })
  }

  atras(e: any){

    console.log(this.paginacionService.totalPages, this.paginacionService.pageNumber)

    this.hijos.forEach((hijo, index) => {
        hijo.comentariosVisible = false
    });

    if(this.paginacionService.pageNumber > 0){

      this.paginacionService.pageNumber--

      this.getPublicaciones(this.paginacionService.pageNumber)

    }

    if(this.paginacionService.pageNumber === 0) this.isDisabled_ = true
    if(this.paginacionService.pageNumber < this.paginacionService.totalPages - 1) this._isDisabled = false
    
  }

  siguiente(e: any){

    this.hijos.forEach((hijo, index) => {
        hijo.comentariosVisible = false
    });

    if(this.paginacionService.pageNumber < (this.paginacionService.totalPages-1)){

      this.paginacionService.pageNumber++
  
      this.getPublicaciones(this.paginacionService.pageNumber)
    }

    console.log(this.paginacionService.pageNumber, this.paginacionService.totalPages - 1)

    if(this.paginacionService.pageNumber != 0) this.isDisabled_ = false

    if(this.paginacionService.pageNumber === (this.paginacionService.totalPages - 1)) this._isDisabled = true
 
  }

 

}
