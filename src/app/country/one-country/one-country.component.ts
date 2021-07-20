import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-one-country',
  templateUrl: './one-country.component.html',
  styleUrls: ['./one-country.component.css']
})
export class OneCountryComponent implements OnInit {
  country: any;
  name: string = '';


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {



    this.countryService.getCountryByCapital(this.name).subscribe(
      (res) => {
        if (res.status === 200) {
          this.country = res.body;

        }
      },
      (error) => {
        if (error) {
          console.log(error);
        }
      },

    );



  }

}
