import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { Inject,Injectable } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public submitted: boolean =false;
  sess:any;
  des:any;
  UserRegisterForm: FormGroup;
  today = new Date();
  isUserValid: boolean = false;
  constructor(private formBuilder: FormBuilder, private backendservice:BackEndServiceService,private router:Router) { 
  this.UserRegisterForm=this.formBuilder.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })
}
public get f()
{
  return this.UserRegisterForm?.controls;
}
  loginSubmitted() {
    if(!this.UserRegisterForm.valid)
    {
      return
    }
    this.submitted=true;
    this.UserRegisterForm.markAllAsTouched();
    if (this.UserRegisterForm.value.username == 'Admin' && this.UserRegisterForm.value.password == 'Admin')
     {
       this.router.navigate(['adminhome'])
      }

    else{

    this.backendservice.loginuser([this.UserRegisterForm.value.username, this.UserRegisterForm.value.password]).subscribe(res => {
     console.log(res);
     console.log(this.UserRegisterForm.value.username)
        if (res == 'Failed') {

      this.isUserValid = false;

       }
        else {
          this.isUserValid = true;
          console.log(res)
          let obj=JSON.parse(res);

          this.sess=obj.regid;
          
            // this.sess=res.charAt(11);
          //console.log(this.sess);

          localStorage.setItem('regid',this.sess);
          console.log(localStorage.getItem('regid'));
          

          this.router.navigate(['userhome'])



        }



      });

    }

  }
  loginreg()
  {
    this.router.navigate(['register'])
  }
    ngOnInit(){
    }
}
