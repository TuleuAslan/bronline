import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {SelectItem} from "../../shared/models/select-item.model";

@Component({
  selector: 'app-club-map',
  templateUrl: './club-map.component.html',
  styleUrls: ['./club-map.component.scss']
})
export class ClubMapComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  timeControl = new FormControl('');
  durationControl = new FormControl('');
  timeVariations: SelectItem[] = [{value:'00:00', viewValue:'00:00'},{value:'00:00', viewValue:'00:00'},{value:'00:00', viewValue:'00:00'},{value:'00:00', viewValue:'00:00'},{value:'00:00', viewValue:'00:00'},{value:'00:00', viewValue:'00:00'},{value:'00:00', viewValue:'00:00'}];
  durations: SelectItem[] = [{value:1, viewValue:'1 час'},{value:2, viewValue:'2 часа'},{value:3, viewValue:'3 часа'}];
  ngOnInit(): void {
  }
  timeSelectValue(event: any){}
  durationSelectValue(event: any){}

}
