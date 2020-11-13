import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { CardsService } from '../service/cards.services';


@Component({
  selector: 'vestidos-novia',
  templateUrl: './vestidos-de-novia.component.html',
  styleUrls: ['./vestidos-de-novia.component.css'],
  providers: [ CardsService ]
})
export class VestidosDeNoviaComponent implements OnInit {
	public cardsNovia: Array<Card>;
  constructor(
  	private _cardService: CardsService
  	) {
      this.cardsNovia = this._cardService.getCardsNovia();
     }

  ngOnInit(): void {
  	
  }

}
