import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import {SelectItem} from "../../shared/models/select-item.model";
export interface Computer {
  disabled: boolean;
}
@Component({
  selector: 'app-club-map',
  templateUrl: './club-map.component.html',
  styleUrls: ['./club-map.component.scss']
})
export class ClubMapComponent implements OnInit {
  roomSelected = 1;
  bookedComputers:number[] = [];
  constructor(private fb: FormBuilder, private toastr: ToastrService) { }
  timeControl = new FormControl('');
  durationControl = new FormControl('');  
  clubInfo = this.fb.group({
    dateValue: ['', Validators.required],
  })
  timeVariations: SelectItem[] = [{value:'18:00', viewValue:'18:00'},{value:'19:00', viewValue:'19:00'},{value:'21:00', viewValue:'21:00'},{value:'00:00', viewValue:'00:00'}];
  durations: SelectItem[] = [{value:1, viewValue:'1 час'},{value:2, viewValue:'2 часа'},{value:3, viewValue:'3 часа'}];
  rooms: SelectItem[] = [{value:1, viewValue:'Комната 1'},{value:2, viewValue:'Комната 2'},{value:3, viewValue:'Комната 3'}];
  test = '';
  room1:Computer[]=[{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false}];
  room2:Computer[]=[{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false}];
  room3:Computer[]=[{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false},{disabled: false}];
  clubComputers = [this.room1, this.room2, this.room3];
  ngOnInit(): void {
    this.timeControl.valueChanges.subscribe();
    this.durationControl.valueChanges.subscribe();
  }
  timeSelectValue(event: any){}
  durationSelectValue(event: any){}
  roomPicked(event: any){
    this.roomSelected = event.value - 1;    
  }
  bookComputer(computer: Computer, index: number){
    computer.disabled = !computer.disabled;
    const found = this.bookedComputers.find(i=>i===index + 1);   
    found ? this.bookedComputers.splice(this.bookedComputers.indexOf(index + 1), 1) : this.bookedComputers.push(index + 1);
  }
  book(){
    this.toastr.success('Забронировано');
  }
}
