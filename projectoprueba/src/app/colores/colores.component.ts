import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generarAleatorio():String{
    return Math.floor(Math.random()* 255).toString(16);
  }

  colorHex():String{
    return '#' + this.generarAleatorio()+this.generarAleatorio()+this.generarAleatorio();
  }

}
