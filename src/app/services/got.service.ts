import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GotService {

  private apiURL = 'https://game-of-thrones-quotes.herokuapp.com/v1/';
 
  constructor(private http: HttpClient) { }

  
  // GET random quote
  public getRandomQuote(): Observable<any> {
    return this.http
      .get(this.apiURL + 'random', { observe: 'response' as 'body' })
      .pipe(
        map((res) => {

          return res;
        })
      );
  
    }


// GET List of Houses
public getHousesList(): Observable<any> {
  return this.http
    .get(this.apiURL + 'houses', { observe: 'response' as 'body' })
    .pipe(
      map((res) => {

        return res;
      })
    );

  }

}
