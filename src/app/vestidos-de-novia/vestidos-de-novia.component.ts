import { Component, OnInit } from '@angular/core';
import { VestidosService } from '../service/vestidos.service';
import { Vestido } from '../models/vestido';

@Component({
  selector: 'vestidos-novia',
  templateUrl: './vestidos-de-novia.component.html',
  styleUrls: ['./vestidos-de-novia.component.css'],
  providers: [VestidosService]
})
export class VestidosDeNoviaComponent implements OnInit {
	public vestidos: Array<Vestido>;
  constructor(
  	private _vestidoService: VestidosService
  	) { }

  ngOnInit(): void {
  	this.vestidos = this._vestidoService.getVestidos();
  }

}
