import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { RatpComponent } from './ratp/ratp.component';
import { CountryComponent } from './country/country.component';
import { CovidComponent } from './covid/covid.component';
import { DailyCovidComponent } from './covid/daily-covid/daily-covid.component';

const routes: Routes = [
  {path: 'shiva/home', component: HomeComponent},
  {path: 'shiva/ratp', component: RatpComponent},
  {path: 'shiva/country', component: CountryComponent},
  {path: 'shiva/covid', component: CovidComponent},
  {path: 'shiva/dailyCovid', component: DailyCovidComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
