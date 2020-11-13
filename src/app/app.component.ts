import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navLinks: any;
  public title: String;
  public userSesion: String;
  public contacto: String;

  constructor(){
  	this.title = Configuracion.titulo;
  	this.userSesion = Configuracion.sesion;
  	this.contacto = Configuracion.contacto;

    this.navLinks = [
    {
      path: 'vilma',
      label: 'Vilma'
    },
        {
      path: 'externo',
      label: 'Login'
    },
    {
      path: 'contacto',
      label: 'Contacto'
    }
    ];
  }
}
