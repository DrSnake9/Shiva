//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//PrimeNG
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


//Components
import { RersComponent } from './ratp/rers/rers.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { RatpComponent } from './ratp/ratp.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CovidComponent } from './covid/covid.component';
import { DailyCovidComponent } from './covid/daily-covid/daily-covid.component';
import { OneCountryComponent } from './country/one-country/one-country.component';
import { TramwayComponent } from './ratp/tramway/tramway.component';
import { WeatherComponent } from './weather/weather.component';
import { GotComponent } from './got/got.component';
import { CoktailComponent } from './coktail/coktail.component';
import { SuperHerosComponent } from './super-heros/super-heros.component';



@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    RatpComponent,
    HomeComponent,
    MenuComponent,
    CovidComponent,
    DailyCovidComponent,
    OneCountryComponent,
    RersComponent,
    TramwayComponent,
    WeatherComponent,
    GotComponent,
    CoktailComponent,
    SuperHerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    DataViewModule,
    TableModule,
    OverlayPanelModule,
    ChartModule,
    CardModule,
    AccordionModule,
    TagModule,
    TooltipModule,
    DialogModule,
    ConfirmDialogModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
