import { Component } from '@angular/core';
import { Confuguration} from './models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'tiquetes';
  public mostrar_cargarTiquetes: boolean = true;
  public config;

  constructor(){
    this.config = Confuguration;
    this.title = Confuguration.title;
  }

  oculatarCargarTiquetes(value){
    this.mostrar_cargarTiquetes= value;
  }
  
}
