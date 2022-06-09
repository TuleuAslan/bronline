import { Component, OnInit } from '@angular/core';

export interface Tab {
  title: string;
  routerLink: string;
}

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})

export class AdminDetailsComponent implements OnInit {
  constructor() { }
  adminMenu:Tab[] = [{title: 'Профиль', routerLink: 'profile'},{title: 'Карта клуба', routerLink: 'club-map'},{title: 'Проверка заказа', routerLink: 'order-verification'}];
  ngOnInit(): void {
  }

}
