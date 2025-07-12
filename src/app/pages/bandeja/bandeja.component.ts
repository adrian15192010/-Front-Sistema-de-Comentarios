import { Component, OnInit, output, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PublicacionService } from '../../publicacion.service';
import { PublicacionComponent } from '../../components/publicacion/publicacion.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginacionService } from '../../paginacion.service';

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

  @ViewChildren(PublicacionComponent) hijos!: PublicacionComponent[];

  isDisabled_: boolean = true
  _isDisabled: boolean = true

  

  constructor(public publicacionService: PublicacionService, private route: ActivatedRoute,  
    private router : Router,
    public paginacionService: PaginacionService){
    
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
      }
    })
  }

  createPublicacion(){

    console.log(this.totalPages)

      const text = prompt("comenta !")

      if(!text) return

    this.publicacionService.createPublicacion(text).subscribe({
      next: (data : any)=>{

        if(this.publicacionesList.length < 3){
          this.getPublicaciones(this.paginacionService.pageNumber)
        }
        
   /////////////////////////////////////////////////////////////////////     
        this.publicacionService.getTotalPages().subscribe({
      next: (data)=>{

        let bolso: number = this.paginacionService.totalPages

        this.paginacionService.totalPages = data.totalPages

        if(bolso != this.paginacionService.totalPages) this._isDisabled = false

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
        this.paginacionService.pageNumber = this.paginacionService.totalPages - 1
        
        this.getPublicaciones(this.paginacionService.pageNumber)
       
      }
     })
  }

  atras(e: any){

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

  enviarFalse(): boolean{
    return false
  }

}
