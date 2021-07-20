import { Component, OnInit } from '@angular/core';
import { Tramway } from 'src/app/entities/Tramway';
import { RatpService } from 'src/app/services/ratp.service';
@Component({
  selector: 'app-tramway',
  templateUrl: './tramway.component.html',
  styleUrls: ['./tramway.component.css']
})
export class TramwayComponent implements OnInit {
  infoTrafic: any;
  trams: Tramway[] = [];
  constructor(private ratpService: RatpService) { }

  ngOnInit(): void {

    this.ratpService.getTraficStatus().subscribe(
      (res) => {
        if (res.status === 200) {
          this.infoTrafic = res.body.result.tramways;
          this.trams = this.infoTrafic;
        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );



  }


}
