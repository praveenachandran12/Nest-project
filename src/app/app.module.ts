import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { AboutComponent } from './guest/about/about.component';
import { ContactComponent } from './guest/contact/contact.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { TechregisterComponent } from './admin/techregister/techregister.component';
import { ViewtechComponent } from './user/viewtech/viewtech.component';
import { AdmintechviewComponent } from './admin/admintechview/admintechview.component';
import { TecheditComponent } from './admin/techedit/techedit.component';
import { SearchtechComponent } from './user/searchtech/searchtech.component';
import { ViewhighercourseComponent } from './user/viewhighercourse/viewhighercourse.component';
import { ApplytechComponent } from './admin/applytech/applytech.component';
import { DatereportComponent } from './admin/datereport/datereport.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    GuesthomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    TechregisterComponent,
    ViewtechComponent,
    AdmintechviewComponent,
    TecheditComponent,
    SearchtechComponent,
    ViewhighercourseComponent,
    ApplytechComponent,
    DatereportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DatePipe
  ],
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
