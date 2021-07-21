import { Component, OnInit } from '@angular/core';
import { RatpService } from '../services/ratp.service';
import { InfoTrafic } from '../entities/InfoTrafic';
import { Transport } from '../entities/Transport';
@Component({
  selector: 'app-ratp',
  templateUrl: './ratp.component.html',
  styleUrls: ['./ratp.component.css']
})
export class RatpComponent implements OnInit {
  infoTrafic: any;
  metros: Transport[] = [];
rers : Transport[]=[];
tramways : Transport[]=[];
isBuilding : boolean = false;
transport01 : any = {};


  constructor(private ratpService: RatpService) { }

  ngOnInit(): void {

    this.ratpService.getTraficStatus().subscribe(
      (res) => {
        if (res.status === 200) {
          this.infoTrafic = res.body.result;
          this.metros = this.infoTrafic.metros;
          this.rers = this.infoTrafic.rers;
          this.tramways = this.infoTrafic.tramways;
        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );



  }


buidingVerif(){
  for(var item in this.tramways){
    console.log(this.tramways);
    console.log(item);
  if (item == 'Traffic normal' ){
    this.isBuilding = true;
  }
}
}



}
