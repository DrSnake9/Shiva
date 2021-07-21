import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { RatpComponent } from './ratp/ratp.component';
import { CountryComponent } from './country/country.component';
import { CovidComponent } from './covid/covid.component';
import { DailyCovidComponent } from './covid/daily-covid/daily-covid.component';
import { OneCountryComponent } from './country/one-country/one-country.component';
import { RersComponent } from './ratp/rers/rers.component';
import { TramwayComponent } from './ratp/tramway/tramway.component';
import { WeatherComponent } from './weather/weather.component';
import { GotComponent } from './got/got.component';
import { PersonageComponent } from './got/personage/personage.component';
import { CoktailComponent } from './coktail/coktail.component';
import { SuperHerosComponent } from './super-heros/super-heros.component';
const routes: Routes = [
  { path: 'shiva/home', component: HomeComponent },
  { path: 'shiva/ratp', component: RatpComponent },
  { path: 'shiva/country', component: CountryComponent },
  { path: 'shiva/oneCountry/{{name}}', component: OneCountryComponent },
  { path: 'shiva/covid', component: CovidComponent },
  { path: 'shiva/dailyCovid', component: DailyCovidComponent },
  { path: 'shiva/ratp/taffic/rer', component: RersComponent },
  { path: 'shiva/ratp/taffic/tramway', component: TramwayComponent },
  { path: 'shiva/weather', component: WeatherComponent },
  { path: 'shiva/got', component: GotComponent },
  { path: 'shiva/cocktails', component: CoktailComponent },
  { path: 'shiva/super-hero', component: SuperHerosComponent },
  { path: 'shiva/got/personage/:slug', component: PersonageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
