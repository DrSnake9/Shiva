import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RatpService {
  private apiURL = 'https://api-ratp.pierre-grimaud.fr/v4/';
  constructor(private http: HttpClient) { }

  // GET Traffic Status
public getTraficStatus(): Observable<any> {
  return this.http
    .get(this.apiURL + 'traffic', { observe: 'response' as 'body' })
    .pipe(
      map((res) => {
        
        return res;
      })
    );
}
}
