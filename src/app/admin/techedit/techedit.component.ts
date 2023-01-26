import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';
@Component({
  selector: 'app-techedit',
  templateUrl: './techedit.component.html',
  styleUrls: ['./techedit.component.scss']
})
export class TecheditComponent {
  techid: any;
  public Techdataarray: any;
  EditregForm:FormGroup;
  constructor(private fb:FormBuilder,private backendservice:BackEndServiceService,private router:Router,private route:ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => { this.techid = params.get('id')

  })

  this.EditregForm= this.fb.group({

    Techid:[''],
    TechnologyName: [''],
    InstituteName: [''],
    Duration: [''],
    Location: [''],
    Image:[''],
    Fees: [''],
    Description: [''],
  })

}
ngOnInit(): void {

  this.backendservice.getTecbaseid(this.techid).subscribe((data: any) => {

  this.Techdataarray = data;

  this.EditregForm.setValue({

  Techid: data.techid,

  TechnologyName: data.technologyName,

  InstituteName: data. instituteName,

  Duration:data.duration,

  Location:data.location,

  Image:data.image,

  Fees:data.fees,

  Description:data.description

  });

  //this.EditCourseForm.patchValue(this.Coursedataarray)

  });

  }
  OnSubmit() {

    this.backendservice.updateTechdata(this.EditregForm.value)

    console.log(this.EditregForm.value)

    this.router.navigate(['/adminhome/techviews']);

}
OnDelete() {

  this.backendservice.deleteTechdata(this.EditregForm.value)

  console.log(this.EditregForm.value)

  this.router.navigate(['/adminhome/techviews']);

}

}