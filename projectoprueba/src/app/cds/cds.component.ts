import { Component, OnInit } from '@angular/core';
import { CdclickedService } from '../cdclicked.service';
import { HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css']
})
export class CdsComponent implements OnInit {

  cds: any;
  errorHttp: any;
  cargandoCds: boolean;
  
  constructor(private http: HttpClient, public Cdclicked: CdclickedService) { 
  
    this.cargandoCds = true;
  }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(){
    this.http.get('./assets/lista-cds.json').subscribe(
      data => {this.cds = data;
      this.cargandoCds = false},
      data => {this.errorHttp = true;}
    );
  }

  agregarCd(_cdVisto:any){
    this.Cdclicked.cdVisto(_cdVisto);

  }

}
