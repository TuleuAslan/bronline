import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUp } from '../general.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private fb: FormBuilder, private toastr: ToastrService, private service:ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    const signUpInfo: SignUp = {email:this.signUpForm.controls['email'].value,password:this.signUpForm.controls['password'].value,
    phone:this.signUpForm.controls['phone'].value,computerClub:{name:this.signUpForm.controls['name'].value}};
    console.log(signUpInfo);
    
    this.service.signUp(signUpInfo).subscribe((res)=>{
      localStorage.setItem('clubId', res.id.toString());
      localStorage.setItem('clubEmail', res.email);
      localStorage.setItem('phone', res.phone);
      this.toastr.success('Вы успешно зарегистрированы, подтвердите почту');
      this.router.navigate(['/login']);
    },(error)=>{
      this.toastr.error(error.error.message);
    })
  }
}
