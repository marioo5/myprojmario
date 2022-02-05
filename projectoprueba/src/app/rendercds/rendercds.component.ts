import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendercds',
  templateUrl: './rendercds.component.html',
  styleUrls: ['./rendercds.component.css']
})
export class RendercdsComponent implements OnInit {

  cds: Array<any>;
  clearElement!: HTMLElement;

  constructor(private ren:Renderer2) { 
    this.cds = [
      {id:'1',titulo:'Thriller', autor:'Mickel Jackson', precio: '12€'},
      {id:'2',titulo:'Back in Black', autor:'ACDC', precio: '15€'},
      {id:'3',titulo:'The Dark Side Of The Moon', autor:'Pink Floyd', precio: '10€'}
    ]
  }

  ngOnInit(): void {
  }

  ActivateMethod(elemen:HTMLElement){
    if (this.clearElement){
      this.ren.removeClass(this.clearElement, 'miclase');
    };

    let nuevoElemento = this.ren.createElement("span");
    this.ren.setProperty(nuevoElemento, "innerHTML" , " ✅ ");
    this.ren.appendChild(elemen, nuevoElemento );

    this.ren.setAttribute(elemen, 'data-select', 'true');
    this.ren.addClass(elemen, 'miclase');
    this.clearElement=elemen;
  }

  ActivateMethod2(elemen:HTMLElement){
    this.ren.removeClass(elemen, 'miclase');
  }

  comprar(elemen:HTMLElement){
    if (this.clearElement){
      this.ren.removeClass(this.clearElement, 'miclase');
    };

    let nuevoElemento = this.ren.createElement("button");
    this.ren.setProperty(nuevoElemento, "innerHTML" , " comprar ");
    this.ren.setProperty(nuevoElemento, "onclick" , "alert('Comprado')");
    this.ren.appendChild(elemen, nuevoElemento);

    this.ren.setAttribute(elemen, 'data-select', 'true');
    this.clearElement=elemen;
  }


    

}
