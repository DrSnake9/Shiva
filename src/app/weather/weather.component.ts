import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any = null;
  city: string = 'Paris';
  date : any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
this.weatherService.getForCity(this.city).subscribe(
  (res) => {
    if (res.status === 200) {
      this.weather = res.body;
      console.log(this.date)
    }
  }
)
  }

  getWeatherByCity(city: string) {
    console.log(this.city);
    
        this.weatherService.getForCity(this.city).subscribe(data => {
            if (data.status === 200) {
            console.log(data)
    
            }
          },
          error => {
            if (error.status === 409) {
              console.log(error)
            }
          }
        )
  }

}
