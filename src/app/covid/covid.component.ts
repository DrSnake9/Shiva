import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { CovidInfo } from '../entities/CovidInfo';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
}




}
