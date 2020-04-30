import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'willma',
  templateUrl: './home-willma.component.html',
  styleUrls: ['./home-willma.component.css']
})
export class HomeWillmaComponent implements OnInit {
  public posts: {
    id: String;
    titlePost: String;
    contentPost: String;
    imagePost: String;
  }[] = [
    {
      id : '1',
      titlePost : 'Post One',
      contentPost : 'Pero que paso',
      imagePost : 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
    }
  ];
	public nombre: String;
	public color: String;
  public identificado: boolean;

  constructor(
	private _route: ActivatedRoute,
	private _router: Router
  	) 
  { 
    this.identificado = false;
  }

  ngOnInit(): void {
  	this._route.params.subscribe((params: Params) => {
  		this.nombre = params.nombre;
  		this.color = params.color;
  		console.log(this.nombre + " - "+this.color);
  	})
  }
  redirigir(){
  	this._router.navigate(['/vestidos-de-novia'])
  }
  setIdentificado(){
    this.identificado = true;
  }
  unsetIdentificado(){
    this.identificado = false;
  }
}
