import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-techregister',
  templateUrl: './techregister.component.html',
  styleUrls: ['./techregister.component.scss']
})
export class TechregisterComponent {
  proofUrl='';
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  constructor(private fb: FormBuilder,private backendservice:BackEndServiceService,private router:Router) { }
  TechRegisterForm = this.fb.group({
    TechnologyName: [''],
    InstituteName: [''],
    Duration: [''],
    Location: [''],
    image: [''],
    Fees: [''],
    Description: ['']
    
  })
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  // OnSubmit() {
  //   this.backendservice.inserttechdata(this.TechRegisterForm.value)
  //   this.router.navigate(['adminhome'])
  //   console.log(this.TechRegisterForm.value)
  // }
  upload(): void {
    // this.progress = 0;
 
     if (this.selectedFiles) {
       const file: File | null = this.selectedFiles.item(0);
 
       if (file) {
         this.currentFile = file;
 
         this.backendservice.upload(this.currentFile).subscribe(
           (event: any) => {
             // if (event.type === HttpEventType.UploadProgress) {
             //   this.progress = Math.round(100 * event.loaded / event.total);
             // } else if (event instanceof HttpResponse) {
               this.message = event.body.message;
               this.fileInfos = this.backendservice.getFiles();
             //}
           },
           (err: any) => {
             console.log(err);
            // this.progress = 0;
 
             if (err.error && err.error.message) {
               this.message = err.error.message;
             } else {
               this.message = 'Could not upload the file!';
             }
 
             this.currentFile = undefined;
           });

         }
   
         this.selectedFiles = undefined;
       }
       this.backendservice.inserttechdata(this.TechRegisterForm.value)
     this.router.navigate(['adminhome'])
    console.log(this.TechRegisterForm.value)
     }
  
    
  }


