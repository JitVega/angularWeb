import { Injectable, OnInit } from '@angular/core';
import { Vestido } from '../models/vestido';


@Injectable()
export class VestidosService implements OnInit{
	public vestidos: Array<Vestido>;

	constructor(){
		this.vestidos = [
			new Vestido('novia',['dorado','rojo'],['Guipur','crepé'],false,'Vestido tubo','adaptable','poco',true),
			new Vestido('fiesta',['naranja','blanco'],['Lino','crepé'],false,'Vestido princesa','adaptable','poco',true),
			new Vestido('quince',['celeste','blanco'],['seda','crepé'],false,'Vestido princesa','adaptable','poco',true)
		];
	}
	ngOnInit(){
		console.log(this.vestidos);
	}
	public getTexto(){
		return "Saludos desde un servicio";
	}
	public getVestidos(): Array<Vestido>{
		return this.vestidos;
	}
}
