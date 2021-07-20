import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private apiURL = 'https://coronavirusapi-france.now.sh/FranceLiveGlobalData';
  constructor(private http: HttpClient) { }

  // GET LIST OF ALL Countries
  public getDataFromBeagin(): Observable<any> {
    console.log("covid service");
    return this.http
      .get(this.apiURL, { observe: 'response' as 'body' })
      .pipe(
        map((res) => {

          return res;
        })
      );
  }



  // GET Graph FRANCE
  public getFrenchGraph(): Observable<any> {
    console.log("covid service");
    return this.http
      .get('https://corona.dnsforfamily.com/graph.png?c=fr', { observe: 'response' as 'body' })
      .pipe(
        map((res) => {

          return res;
        })
      );
  }

}
