import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  cds : Array<any>;
  cdId:any;
  cdClick:any;

  constructor(private rutausuario:ActivatedRoute) { 
    this.cds = [
      {id:'1',titulo:'Thriller', autor:'Mickel Jackson', precio: '12€', canciones:['Wanna Be Startin Somethin', 'Baby Be Mine','Thriller']},
      {id:'2',titulo:'Back in Black', autor:'ACDC', precio: '15€', canciones:['Hells Bells','Shoot to Thrill','Givin the Dog a Bone']},
      {id:'3',titulo:'The Dark Side Of The Moon', autor:'Pink Floyd', precio: '10€', canciones:['Speak to Me','Breathe','On the Run']}
    ];
  }

  ngOnInit(): void {
    this.rutausuario.params.subscribe(params =>{
      this.cdId= params['cdId']
      this.cdClick = this.cdBuscador();
    })
  }

  filtroId(cd:any){
    return cd.id == this;
  }

  cdBuscador(){
    return this.cds.filter (this.filtroId, this.cdId) [0];
  }

}
