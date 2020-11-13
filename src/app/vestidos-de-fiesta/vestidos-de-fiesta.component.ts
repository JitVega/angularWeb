import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { CardsService } from '../service/cards.services';


@Component({
  selector: 'vestidos-fiesta',
  templateUrl: './vestidos-de-fiesta.component.html',
  styleUrls: ['./vestidos-de-fiesta.component.css'],
  providers: [ CardsService ]
})
export class VestidosDeFiestaComponent implements OnInit {
  public cardsFiesta: Array<Card>;
  constructor(
    private _cardService: CardsService
  ) { 
    this.cardsFiesta = this._cardService.getCardsFiesta();
  }

  ngOnInit(): void {
  }

}
