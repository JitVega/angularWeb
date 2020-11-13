import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { CardsService } from '../service/cards.services';

@Component({
  selector: 'vestidos-quince',
  templateUrl: './vestidos-de-quince.component.html',
  styleUrls: ['./vestidos-de-quince.component.css'],
  providers: [ CardsService ]
})
export class VestidosDeQuinceComponent implements OnInit {
  public cardsQuince: Array<Card>;
  constructor(
    private _cardService: CardsService
  ) { 
    this.cardsQuince = this._cardService.getCardsQuince();
  }

  ngOnInit(): void {
  }

}
