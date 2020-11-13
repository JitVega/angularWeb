export class Card{

    constructor(
        public title: String,
        public routeLink: String,
        public subtitle: String,
        public image: String,
        public text: String,
        public routeButton: String,
        public buttonText: String,
        public cols: number,
        public rows: number
    ){};
}