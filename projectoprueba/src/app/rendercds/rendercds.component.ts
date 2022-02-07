import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
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
    if (this.clearElement === elemen || elemen.hasAttribute("data-select")){
      this.ren.removeClass(this.clearElement, 'miclase');
    } else {

      let titulo = elemen.innerText;
      let boton: HTMLButtonElement = this.ren.createElement("button");
      this.ren.setProperty(boton, "innerText", "Comprar");
      this.ren.listen(boton, 'click', function (evento: any) {
        alert(titulo + " comprado")
      });

    this.ren.appendChild(elemen, boton);
    let nuevoElemento = this.ren.createElement("span");
    this.ren.setProperty(nuevoElemento, "innerHTML" , " ✅ ");
    this.ren.appendChild(elemen, nuevoElemento );

    }

    this.ren.setAttribute(elemen, 'data-select', 'true');
    this.ren.addClass(elemen, 'miclase');
    this.clearElement=elemen;
  }

  ActivateMethod2(elemen:HTMLElement){
    this.ren.removeClass(elemen, 'miclase');
  }

}
