import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Country } from '../entities/Country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  country: any;
  selectedCountry: any;
  countryIdOnToggle: number = 0;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountry().subscribe(
      (res) => {
        if (res.status === 200) {
          this.countries = res.body;
          console.log(this.countries)
        }
      }
    );




  }


  getRowIndex(id: any) {
    this.countryIdOnToggle = id;
  }

}
