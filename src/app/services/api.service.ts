import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  // to get admin details

   adminDetails(){
    // api call to http:3000/users/1
    return this.http.get(`${this.base_url}/users/1`)
    
   }  

  //  to get all user data from json file(back end)

  getAllusers(){

    // api call to this url:::::: http://localhost:3000/users

   return this.http.get(`${this.base_url}/users`)



  }




}
