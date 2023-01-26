import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchtech',
  templateUrl: './searchtech.component.html',
  styleUrls: ['./searchtech.component.scss']
})
export class SearchtechComponent {
  constructor(private backendService:BackEndServiceService,private fb:FormBuilder,private router:Router){}
  Dataarray: any[]=[];
  a:any;
  myTechnology:any[]=[];
  SearchGroup=this.fb.group({

    technologyname:['']
  });
  ngOnInit(){
    this.getTechnology();
    
  }
  
  getTechnology(){
    console.log(parseInt(localStorage.getItem("regid")!))

    this.a=parseInt(localStorage.getItem("regid")!)
    this.backendService.gettechsearch().subscribe((result:any)=>{

      this.myTechnology = result;

      console.log(result);

    });

    console.log(this.myTechnology);


  }
  onChange(){

    console.log(this.SearchGroup.value.technologyname);

  for (let index = 0; index < this.myTechnology.length; index++) {

if (this.SearchGroup.value.technologyname === this.myTechnology[index].technologyName) {

  console.log(this.myTechnology[index])

  this.Dataarray.push(this.myTechnology[index]);

}

console.log(this.Dataarray);

  }



  }
  onSubmit(id: any){
    
    let value= {
      techid: id,
      status:'Applied',
      regid: parseInt(localStorage.getItem('regid')!)
      };
       this.backendService.applytech(value).then((result:any) => { console.log(result); });
       alert("Applied Sucessfully")
       this.router.navigate(['userhome'])
  }
  reloadCurrentPage() {

    window.location.reload();



   }
}
