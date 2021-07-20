import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Countries',
        icon: 'pi pi-fw pi-globe',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-globe',
            url: '/shiva/country'
          },


        ]
      },
      {
        label: 'Covid',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'DashBoard',
            url: '/shiva/covid',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Daily Covid Info',
            url: 'shiva/dailyCovid',
            icon: 'pi pi-fw pi-align-right'
          },


        ]
      },
      {
        label: 'Ratp',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Traffic Metro',
            icon: 'pi pi-fw pi-user-plus',
            url: 'shiva/ratp'

          },
          {
            label: 'Traffic Rer',
            icon: 'pi pi-fw pi-user-minus',
            url: 'shiva/ratp/taffic/rer'
          },
          {
            label: 'Traffic Tramway',
            icon: 'pi pi-fw pi-user-minus',
            url: 'shiva/ratp/taffic/tramway'
          }
        ]
      },

      {
        label: 'Weather',
        icon: 'pi pi-fw pi-sun',
        url: 'shiva/weather'
      },

      {
        label: 'Got Quotes',
        icon: 'pi pi-fw pi-power-off',
        url: 'shiva/got'
      },

      {
        label: 'Cocktails',
        icon: 'pi pi-fw pi-power-off',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-power-off',
            url: 'shiva/cocktails'
          },
        ]
      },

      {
        label: 'Super Heros',
        icon: 'pi pi-fw pi-power-off',
        url: 'shiva/super-hero'
      },

      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        url: 'shiva/home'
      }
    ];
  }
}


