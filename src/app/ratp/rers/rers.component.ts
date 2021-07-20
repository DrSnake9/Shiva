import { Component, OnInit } from '@angular/core';

import { RatpService } from '../../services/ratp.service';
import { Rer } from '../../entities/Rer';
@Component({
  selector: 'app-rers',
  templateUrl: './rers.component.html',
  styleUrls: ['./rers.component.css']
})
export class RersComponent implements OnInit {
  infoTrafic: any;
  rers: Rer[] = [];

  constructor(private ratpService: RatpService) { }

  ngOnInit(): void {

    this.ratpService.getTraficStatus().subscribe(
      (res) => {
        if (res.status === 200) {
          this.infoTrafic = res.body.result;
          this.rers = this.infoTrafic.tramways;
        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );



  }


}
