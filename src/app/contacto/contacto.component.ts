import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
	public usuario: ContactoUsuario;
  constructor() { 
  	this.usuario = new ContactoUsuario('','','','','');
  	//this.usuario = new ContactoUsuario('Vilma','Lagos Montes','vilma@gmail.com','933717661','Willma');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
  	//console.log(this.usuario);
  	//form.reset;
  	//console.log("Evento submit lanzado");
  }

}
