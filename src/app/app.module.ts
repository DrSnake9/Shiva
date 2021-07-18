import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { RatpComponent } from './ratp/ratp.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CovidComponent } from './covid/covid.component';
import { DailyCovidComponent } from './covid/daily-covid/daily-covid.component';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    RatpComponent,
    HomeComponent,
    MenuComponent,
    CovidComponent,
    DailyCovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    DataViewModule,
    TableModule,
    OverlayPanelModule,
    ChartModule,
    CardModule,
    AccordionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
