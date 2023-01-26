import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';
@Component({
  selector: 'app-applytech',
  templateUrl: './applytech.component.html',
  styleUrls: ['./applytech.component.scss']
})
export class ApplytechComponent {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit():void{

    this.backendservice.getTechnologyapply().subscribe((res) => {

      this.Dataarray = res;



       })

  }
  
}
