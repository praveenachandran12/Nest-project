import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-viewtech',
  templateUrl: './viewtech.component.html',
  styleUrls: ['./viewtech.component.scss']
})
export class ViewtechComponent {
  constructor(private fb: FormBuilder,private backendservice:BackEndServiceService,private router:Router) { }
  sess:any;
    a:any;
    b:any;
  Dataarray: any[] = [];
  public catid:any; 
  public techid:any; 
 

  ngOnInit(){
    
    console.log(parseInt(localStorage.getItem("regid")!))
    this.a=parseInt(localStorage.getItem("regid")!)
    
    this.backendservice.gettechdata(this.Dataarray).subscribe((res:any) => {
      this.Dataarray = res;
      console.log(res)
      
      //console.log(res);
      //let obj=JSON.parse(res);

         // this.sess=obj.techid;
           // this.sess=res.charAt(11);
          //console.log(this.sess);

         // localStorage.setItem('techid',this.sess);
          //this.sess=res.charAt(11);
         // console.log(this.sess);
          
          
    })
  }
  TechRegisterForm = this.fb.group({
   // Techid: [''],
   
    
  })
  // OnSubmit() {
  //   //this.backendservice.applytech(this.TechRegisterForm.value)
  //   //localStorage.setItem('techid',this.sess);
  //   //console.log(parseInt(localStorage.getItem("techid")!))
  //   console.log(parseInt(localStorage.getItem("techid")!))
  //   this.b=parseInt(localStorage.getItem("techid")!)
  //   this.router.navigate(['userhome'])
  //   console.log(this.TechRegisterForm.value)
  // }
  date= new Date();
  onSubmit(id: any){
    
    let value= {
      dates :new Date(),
      techid: id,
      status:'Applied',
     
      regid: parseInt(localStorage.getItem('regid')!)
      };
      console.log(new Date())
       this.backendservice.applytech(value).then((result:any) => { console.log(result); });
       alert("Applied Sucessfully")
       this.router.navigate(['userhome'])
      
  }
  }

