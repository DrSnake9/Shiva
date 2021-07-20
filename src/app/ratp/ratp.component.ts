import { Component, OnInit } from '@angular/core';
import { RatpService } from '../services/ratp.service';
import { InfoTrafic } from '../entities/InfoTrafic';
import { Metro } from '../entities/Metro';
@Component({
  selector: 'app-ratp',
  templateUrl: './ratp.component.html',
  styleUrls: ['./ratp.component.css']
})
export class RatpComponent implements OnInit {
  infoTrafic: any;
  metros: Metro[] = [];


  constructor(private ratpService: RatpService) { }

  ngOnInit(): void {

    this.ratpService.getTraficStatus().subscribe(
      (res) => {
        if (res.status === 200) {
          this.infoTrafic = res.body.result;
          this.metros = this.infoTrafic.metros;

        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );



  }




}
