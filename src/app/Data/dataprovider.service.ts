import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor() { }

  consulta() {
    return [
      {nombre:"Juan",
      apellido:"Perez",
      pais: "Mexico"},
      {nombre:"Maria",
      apellido:"Alvarez",
      pais: "Argentina"},
      {nombre:"Luis",
      apellido:"Ramos",
      pais: "Chile"},
      {nombre:"Leonardo",
      apellido:"Ramirez",
      pais: "Mexico"},
  
  ]
  }
}
