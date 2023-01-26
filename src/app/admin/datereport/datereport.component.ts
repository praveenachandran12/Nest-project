import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datereport',
  templateUrl: './datereport.component.html',
  styleUrls: ['./datereport.component.scss']
})
export class DatereportComponent {
   constructor(private datepipe:DatePipe,private fb:FormBuilder,private backendservice:BackEndServiceService){}  
  DataArray:any
   TrasfromedTime:any
   DArray:any=[]
   searchform=this.fb.group({
    datestart:[''],
     dateend:[''] 
    })
     onSubmit(){
      this.backendservice.searchdate(this.searchform.value.datestart,this.searchform.value.dateend).subscribe((res) => {
        this.DataArray=res
        // console.log(this.DataArray)  
        // console.log(this.DataArray.date)  
         this.DataArray.forEach((element: any) => {
          this.TrasfromedTime =this.datepipe.transform(element.dates, 'EEEE, MMMM d, y');
          this.DArray.push(this.TrasfromedTime)
           // console.log(this.TrasfromedTime)  
          });
           })
             console.log(this.DArray)
           // console.log(this.searchform.value.dateend)
           // console.log(this.searchform.value.datestart)
           console.log(this.searchform.value)  
          }
      
        }
      
