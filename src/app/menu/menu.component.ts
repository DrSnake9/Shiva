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
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-plus',
           url : '/shiva/country'
          },
          
         
        ]
      },
      {
        label: 'Covid',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'DashBoard',
            url : '/shiva/covid',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Daily Covid Info',
            url:'shiva/dailyCovid',   
            icon: 'pi pi-fw pi-align-right'
          },
          

        ]
      },
      {
        label: 'Ratp',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Traffic Status',
            icon: 'pi pi-fw pi-user-plus',
            url:'shiva/ratp'

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          }
        ]
      },
      
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        url:'shiva/home'
      }
    ];
  }
}


