import { Component, OnInit } from '@angular/core';
import { GotService } from '../services/got.service';
@Component({
  selector: 'app-got',
  templateUrl: './got.component.html',
  styleUrls: ['./got.component.css']
})
export class GotComponent implements OnInit {
randomQuote : any;
display: boolean = false;
houses : any;
  constructor(private gotService : GotService) { }

  ngOnInit(): void {
    
  
    this.gotService.getHousesList().subscribe(
      (res) => {
        if (res.status === 200) {
          this.houses = res.body;
         console.log(this.houses);
        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );
  
  
  
  }


  getRandomQuote(){
    this.gotService.getRandomQuote().subscribe(
      (res) => {
        if (res.status === 200) {
          this.randomQuote = res.body;
         console.log(this.randomQuote);
        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );
  }


  
  showDialog() {
    this.display = true;
}




  



}
