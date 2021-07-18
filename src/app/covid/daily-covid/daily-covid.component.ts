import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service';
@Component({
  selector: 'app-daily-covid',
  templateUrl: './daily-covid.component.html',
  styleUrls: ['./daily-covid.component.css']
})
export class DailyCovidComponent implements OnInit {
  globalDatas :any;
  constructor(private covidService :CovidService) { }

  ngOnInit(): void {

    this.covidService.getDataFromBeagin().subscribe(
      (res) => {
        console.log('covid component');
          this.globalDatas = res.body.FranceGlobalLiveData[0];       
      }
    );


  }

}
