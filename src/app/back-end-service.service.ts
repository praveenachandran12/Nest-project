import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {
  private baseUrl = 'https://localhost:44302';
  constructor(private http:HttpClient) { }
  insertcoursedata(data: any) {
    this.http.post("https://localhost:44302/api/Register/insertuser", data).toPromise().then(result => 
    { console.log(result); })

}
inserttechdata(data: any) {
  this.http.post("https://localhost:44302/api/Tech/instechnology", data).toPromise().then(result => 
  { console.log(result); })

}
loginuser(loginInfo:Array<string>){
return this.http.post("https://localhost:44302/api/Register/userlogin",{
username:loginInfo[0],
password:loginInfo[1],
 },
{
responseType:'text',
});
}
gettechdata(techid:any) {
  console.log("techid",techid)
  return this.http.get<any>("https://localhost:44302/api/Tech/viewtech/"+techid)
 }
 gettechsearch() {
  // console.log("techid",techid)
  return this.http.get<any>("https://localhost:44302/api/Tech/viewtech")
 }
getTechnologyadmin() {

  return this.http.get<any>("https://localhost:44302/api/Tech/viewtechnology")

  }
  getTechnologyapply() {

    return this.http.get<any>("https://localhost:44302/api/Apply/viewapply")
  
    }
  
  getTecbaseid(techid: any) {

    return this.http.get<any>('https://localhost:44302/api/Tech/ViewTechByid/' + techid)

    }

    updateTechdata(data: any) {

      this.http.post("https://localhost:44302/api/Tech/updateTech", data).toPromise().then(result =>

     { console.log(result); })

   }
   
   deleteTechdata(data: any) {

    this.http.post("https://localhost:44302/api/Tech/deleteTech", data).toPromise().then(result =>

   { console.log(result); })

 }
 applytech(data: any) {

  return this.http.post("https://localhost:44302/api/Apply/applytech", data).toPromise()
console.log(data);

 }
 
 submittech(res: any) {

  this.http.post("https://localhost:44302/api/Tech/deleteTech", res).toPromise().then(result =>

 { console.log(result); })

}
upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', file);

  const req = new HttpRequest('POST', `https://localhost:44302/upload`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}

getFiles(): Observable<any> {
  return this.http.get(`${this.baseUrl}/files`);
}

searchdate(datestart:any,dateend:any){
   console.log(dateend)
   console.log(datestart)
    return this.http.get<any>("https://localhost:44302/api/Apply/search") 
    // .toPromise().then(result => { console.log(result); }) 
   }





}
