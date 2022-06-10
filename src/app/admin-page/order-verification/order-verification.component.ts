import { Component, OnInit } from '@angular/core';
export interface ClientList {
  No: string;
  name: string;
  place: number[];
  time: string;
  duration: string;
}

const ELEMENT_DATA: ClientList[] = [
  {No: '№18837657', name: 'Абысов Абулхаир', place: [1,3], time: '03.04.22; 22:00', duration:'3 часа'},
];
@Component({
  selector: 'app-order-verification',
  templateUrl: './order-verification.component.html',
  styleUrls: ['./order-verification.component.scss']
})
export class OrderVerificationComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['No', 'name', 'place', 'time', 'duration'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
