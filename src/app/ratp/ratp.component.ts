import { Component, OnInit } from '@angular/core';
import { RatpService } from '../services/ratp.service';
import { InfoTrafic } from '../entities/InfoTrafic';
import { Metro } from '../entities/metro';
import { Tramway } from '../entities/Tramway';
import { Rer } from '../entities/Rer';
@Component({
  selector: 'app-ratp',
  templateUrl: './ratp.component.html',
  styleUrls: ['./ratp.component.css']
})
export class RatpComponent implements OnInit {
infoTrafic :any;
metros : Metro[]=[];
tramways : Tramway[]=[];
rers : Rer[]=[];

  constructor(private ratpService : RatpService) { }

  ngOnInit(): void {

    this.ratpService.getTraficStatus().subscribe(
      (res) => {
        if (res.status === 200) {
          this.infoTrafic = res.body.result;
          this.metros = this.infoTrafic.metros;
          this.rers = this.infoTrafic.rers;
          this.tramways = this.infoTrafic.Tramway;
        }
        if(res.status ===404){
          console.log('IL Y A UN PROBLEME')
        }
      }
    );



  }

}
