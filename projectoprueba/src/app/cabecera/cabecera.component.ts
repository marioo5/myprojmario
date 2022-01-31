import { Component, OnInit } from '@angular/core';
import { CdclickedService } from '../cdclicked.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public cdsVistos: CdclickedService) { }

  ngOnInit(): void {
  }

}
