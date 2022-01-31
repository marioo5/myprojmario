import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CdclickedService {
  cds: any;

  constructor(private http: HttpClient) { 
    this.cds=[];
   }

  cdVisto(cdVisto:any){
    this.cds.push(cdVisto);
  }
  verListado(){
    if(this.cds.length > 0){
      return this.cds
    }else{
      return false;
    }
  }
}
