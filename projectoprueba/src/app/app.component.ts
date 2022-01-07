import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectoprueba';
  condicion:boolean = true;
  verAutor: any;
  libros! : Array<any>;
  vblecolor!: string;
  color!: string;
  userObservable!: boolean;


constructor () {
  this.libros =[
    {id:'1',titulo:'La bestia', autor:'Carmen Mola'},
    {id:'2',titulo:'Últimos días en Berlín', autor:'Paloma'},
    {id:'3',titulo:'El principe persia', autor:'Fernando'},
  ];

}

showAuthor(_libro:any){
  this.verAutor= 'Escrito por' + _libro.autor;
  alert(this.verAutor);
}

}
