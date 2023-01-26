import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-admintechview',
  templateUrl: './admintechview.component.html',
  styleUrls: ['./admintechview.component.scss']
})
export class AdmintechviewComponent {
  Dataarray: any[] = [];
  constructor(private backendservice:BackEndServiceService) { }
  ngOnInit():void{

    this.backendservice.getTechnologyadmin().subscribe((res) => {

      this.Dataarray = res;



       })

  }
}
