import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiURL = 'https://restcountries.eu/rest/v2/';
  constructor(private http: HttpClient) { }


  // GET LIST OF ALL Countries
  public getAllCountry(): Observable<any> {
    return this.http
      .get(this.apiURL + 'all', { observe: 'response' as 'body' })
      .pipe(
        map((res) => {

          return res;
        })
      );
  }


  // GET A Counrty By NAME
  public getCountryByName(name: string): Observable<any> {
    return this.http
      .get(this.apiURL + `name/` + name, {
        observe: 'response' as 'body',
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }


  // GET A Counrty By CAPITAL
  public getCountryByCapital(capital: string): Observable<any> {
    return this.http
      .get(this.apiURL + `capital/` + capital, {
        observe: 'response' as 'body',
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }




}
