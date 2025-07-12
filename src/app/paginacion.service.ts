import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginacionService {

  totalPages: number = 0
  pageNumber: number = 0
  mostrarComentario: boolean = false

  constructor() { }
}
