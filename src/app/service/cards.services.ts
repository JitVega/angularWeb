import { Injectable, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Injectable()
export class CardsService implements OnInit{
    public cardsHome :  Array<Card>;
    public cardsQuince: Array<Card>;
    public cardsNovia:  Array<Card>;
    public cardsFiesta: Array<Card>;

    constructor(){
        this.cardsHome = [
            new Card('VESTIDOS DE QUINCEAÑOS','/vestidos-de-quince','te ayudamos a cumplir tu sueño','assets/img/rosa.jpg','Vestidos de diferentes modelos y estilos para celebrar tus 15 años. confecciones personalizadas y a tu medida.','routeQuince()','Quince años',1,1),
            new Card('DISEÑA TU VESTIDO','/contacto','VILMA LAGOS','assets/img/vilma.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','routeNovia()','Novia',1,1),
            new Card('VESTIDOS DE NOVIA','/vestidos-de-novia','Te ayudamos a diseñar tus sueños','assets/img/novia.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','routeFiesta()','Fiesta',1,1)
          ];
        this.cardsQuince = [
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/rosa3.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/dorado.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/blanco-rosa.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/azul1.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/rojo.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/negro-rojo.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/azul.jpg','Un vestido de color rosa que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/rosa5.jpg','Un vestido de color rosa que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/naranja.jpg','Un vestido de color rosa que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/gris-rojo.jpg','Un vestido de color rosa que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/rosa2.jpg','Un vestido de color rosa que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
             new Card('Vestido blanco','','vestidos de novia','assets/img/quince/rosa4.jpg','Un vestido de color rosa que representa la pureza y es un vestido para celebrar los 15 años','','',1,1)
        ];
        this.cardsNovia = [
            new Card('Vestido blanco','','vestidos de novia','assets/img/novia/novia.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/novia/novia2.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/novia/novia3.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/novia/novia4.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1)
        ];
        this.cardsFiesta = [
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/verdePlata1.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/doradoBlanco2.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/AzulNatural.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/rosa-plata1.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/Rojo.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/volcan4.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/rosa-colorido.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1),
            new Card('Vestido blanco','','vestidos de novia','assets/img/fiesta/rosa3.jpg','Un vestido de color blanco que representa la pureza y es un vestido para celebrar los 15 años','','',1,1)
        ]
    }
    ngOnInit()
    {}
    public getCardsHome(): Array<Card>{
        return this.cardsHome;
    }
    public getCardsQuince(): Array<Card>{
        return this.cardsQuince;
    }
    public getCardsNovia(): Array<Card>{
        return this.cardsNovia;
    }
    public getCardsFiesta(): Array<Card>{
        return this.cardsFiesta;
    }
}