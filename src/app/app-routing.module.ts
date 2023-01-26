import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdmintechviewComponent } from './admin/admintechview/admintechview.component';
import { ApplytechComponent } from './admin/applytech/applytech.component';
import { DatereportComponent } from './admin/datereport/datereport.component';
import { TecheditComponent } from './admin/techedit/techedit.component';
import { TechregisterComponent } from './admin/techregister/techregister.component';
import { AboutComponent } from './guest/about/about.component';
import { ContactComponent } from './guest/contact/contact.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { SearchtechComponent } from './user/searchtech/searchtech.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewtechComponent } from './user/viewtech/viewtech.component';

const routes: Routes = [
  {path:'userhome',component:UserhomeComponent},
  {path:'guesthome',component:GuesthomeComponent},
  { path: '', redirectTo: '/guesthome', pathMatch: 'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'Searchtech',component:SearchtechComponent},
  {path:'adminhome',component:AdminhomeComponent,
  children:[
            {path: 'techregister',component:TechregisterComponent},
            {path: 'datereport',component:DatereportComponent},
            {path: 'applytech',component:ApplytechComponent},
            {path: 'techviews',component:AdmintechviewComponent},
            {path: 'edittech/:id',component:TecheditComponent}
        ]
},
{path:'viewtech',component:ViewtechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
