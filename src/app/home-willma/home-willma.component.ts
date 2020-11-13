import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Card } from '../models/card';
import { CardsService } from '../service/cards.services';

@Component({
  selector: 'vilma',
  templateUrl: './home-willma.component.html',
  styleUrls: ['./home-willma.component.css'],
  providers: [ CardsService ]
})
export class HomeWillmaComponent implements OnInit {

  public cards: Array<Card>;

	public nombre: String;
	public color: String;
  public identificado: boolean;

  constructor(
	private _route: ActivatedRoute,
  private _router: Router,
  private _cardsService: CardsService
  	) {
    this.identificado = false;
    this.cards = this._cardsService.getCardsHome();
  }

  ngOnInit(): void {
  	this._route.params.subscribe((params: Params) => {
  		this.nombre = params.nombre;
  		this.color = params.color;
  		console.log(this.nombre + ' - ' + this.color);
  	});
  }
  setIdentificado() {
    this.identificado = true;
  }
  unsetIdentificado() {
    this.identificado = false;
  }
  routeNovia() {
    this._router.navigate(['/vestidos-de-novia']);
  }
  routeQuince(){
    this._router.navigate(['/vestidos-de-quince']);
  }
  routeFiesta(){
    this._router.navigate(['/vestidos-de-fiesta']);
  }
}
