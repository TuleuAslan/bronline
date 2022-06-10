import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  save(){
    this.toastr.success('Изменений успешно сохранены');
  }
}
