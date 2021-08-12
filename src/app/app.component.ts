import { Component, OnInit } from '@angular/core';
import { DataproviderService } from './Data/dataprovider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'practica';
  datos:any = null;

  //construir el proveedor de data
  constructor(private data:DataproviderService){}
  
  ngOnInit(): void {
    this.datos = this.data.consulta()

  }

  
}
