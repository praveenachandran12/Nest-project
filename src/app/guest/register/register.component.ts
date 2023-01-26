import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public submitted: boolean =false;
  constructor(private fb: FormBuilder,private backendservice:BackEndServiceService,private router:Router) { }
  UserRegisterForm = this.fb.group({
    Name: [''],
    Address: [''],
    email: ['',[Validators.required,Validators.email]],
    gender: [''],
    dob: [''],
    phone: [''],
    image: [''],
    username: [''],
    password: ['']
  })
  // OnSubmit() {
  //   console.log(this.UserRegisterForm.value)
  // }
  public get f()
  {
    return this.UserRegisterForm?.controls;
  }
  OnSubmit() {
    if(!this.UserRegisterForm.valid)
    {
      return
    }
    this.submitted=true;
    this.UserRegisterForm.markAllAsTouched();
    this.backendservice.insertcoursedata(this.UserRegisterForm.value)
    this.router.navigate(['login'])
  }


}
