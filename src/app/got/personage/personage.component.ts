import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { GotService } from '../../services/got.service';
@Component({
  selector: 'app-personage',
  templateUrl: './personage.component.html',
  styleUrls: ['./personage.component.css']
})
export class PersonageComponent implements OnInit {
  
  name:string='';
  selectedName : string ='';
  family : any;
  completeFamily : any;
  display: boolean = false;
  randomQuote : any={};
  characteres : any = {};

  constructor(private route: ActivatedRoute, private router: Router, private _location: Location, private gotService : GotService) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['slug'];


    
    this.gotService.getFamilyByName(this.name).subscribe(
      (res) => {
       
        if (res.status === 200) {
          this.family = res.body[0];
          this.completeFamily = this.family.members;
         console.log(this.completeFamily);
        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );




  }


  getQuoteFromPersonage(name : string){
    this.display = true;
    this.gotService.getQuoteFromPersonage(name).subscribe(
      (res) => {
        if (res.status === 200) {
          this.randomQuote = res.body;
          this.characteres= res.body.character;
         console.log(this.randomQuote);
        }
        if (res.status === 404) {
          console.log('IL Y A UN PROBLEME')
        }
      }
    );
  }
  

}
