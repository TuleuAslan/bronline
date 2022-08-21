import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm = this.fb.group({
    phone: ['', Validators.required],
    email: ['', Validators.required],
    // phone: ['', Validators.required],
    // password: ['', Validators.required],
    // computerClub: this.fb.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    //   address: ['', Validators.required],
    //   instagram: ['', Validators.required],
    //   tiktok: ['', Validators.required],
    // })
  })
  clubSample = {
    email:'',
    password:'qwerqwer',
    phone:'',
    computerClub: {
      name: "Cyber-Club Name",
      description: "description",
      address: "address",
      instagram: "link to instagram",
      tiktok: "link to tiktok"
    }
  }
  constructor(private fb: FormBuilder, private toastr: ToastrService, private service:ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.profileForm.controls['phone'].setValue(localStorage.getItem('phone'));
    this.profileForm.controls['email'].setValue(localStorage.getItem('clubEmail'));

  }
  save(){
    this.clubSample.email = localStorage.getItem('clubEmail') || '{}';
    this.clubSample.phone = this.profileForm.controls['phone'].value;
    console.log(this.clubSample);
    
    this.service.updateInfo(localStorage.getItem('clubId') || '{}', this.clubSample).subscribe((val)=>{
      this.toastr.success('Изменений успешно сохранены');
      localStorage.removeItem('phone');
      localStorage.setItem('phone', val.phone);
    },
    (error)=>{this.toastr.error(error.error.message)});
  }
}
