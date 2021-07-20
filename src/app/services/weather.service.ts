import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiURL = 'https://goweather.herokuapp.com/weather/';
  constructor(private http: HttpClient) { }


  // GET Weather for a city
  public getForCity(city: string): Observable<any> {
    return this.http.get(this.apiURL + city, { observe: 'response' as 'body' }).pipe(
      map(res => {
        return res;
      })
    )
  }

}
