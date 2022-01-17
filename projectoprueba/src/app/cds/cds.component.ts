import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css']
})
export class CdsComponent implements OnInit {

  verCd: any;
  cds : Array<any>;

  constructor() { 
    this.cds = [
      {id:'1',titulo:'Thriller', autor:'Mickel Jackson'},
      {id:'2',titulo:'Back in Black', autor:'ACDC'},
      {id:'3',titulo:'The Dark Side Of The Moon', autor:'Pink Floyd'}
    ];
  }

  showCd(_cd:any){
    this.verCd = 'El precio es ' + _cd.precio + ' compuesto por ' + _cd.autor + ' con las siguientes canciones: ' + _cd.canciones;
    alert(this.verCd);
  }

  ngOnInit(): void {
  }

}
