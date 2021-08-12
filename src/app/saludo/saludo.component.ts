import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

  title:string = "Formulario"

  dato1:number = 0
  dato2:number = 0
  resultado:number=0
  
  Suma(){
    this.resultado=this.dato1+this.dato2;
  }

}
