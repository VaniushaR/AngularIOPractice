import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
