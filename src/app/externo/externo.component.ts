import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
	public newUser = true;
	public profile = false;
	public userId: any;
	public fecha: any;
  public new_user: any;
  public usuario_guardado: any;
  public hide: any;
  public userForm = new FormGroup({
    uaserName: new FormControl(''),
    Password: new FormControl('')
  });
  constructor(
  		private _peticionesService: PeticionesService
  	) {
      this.hide = true;
  		this.userId = 1;
      this.new_user = {
        "name": "",
        "job": ""
      };
  	}

  ngOnInit() {
  	this.fecha = new Date(2019, 5, 20);
  	this.cargaUsuario();
  }

  cargaUsuario(){
  	this.user = false;
  	this._peticionesService.getUser(this.userId).subscribe(
  	result =>{
  			this.user = result.data;
  			//console.log(result);
  		},
  		error =>{
  			//console.log(<any>error);
  		}
  		);
  }
  createUser(){
    this.newUser = false;
    this.profile = true;
  }

}
