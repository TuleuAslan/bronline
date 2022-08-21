import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LogIn } from '../general.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private fb: FormBuilder, private toastr: ToastrService, private service:ServicesService, private router: Router) { }

  ngOnInit(): void {

  }
  logIn(){
    const credentials: LogIn = {username: this.loginForm.controls['username'].value, password: this.loginForm.controls['password'].value};
    this.service.login(credentials).subscribe((res)=>{
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token);
      this.router.navigate([`info/${localStorage.getItem('clubId')}`]);
    },(error)=>{this.toastr.error(error.message)})
  
  }
}
