import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // property
  email:string=""
  password:string=""

  constructor(private api:ApiService,private home:Router){}


  login(){
if(this.email&&this.password){
  alert(`${this.email}  ${this.password}`)

  // 1.compare user name and password with admin details
  // for that we should get admin details from :localhost:3000/users
  // api call to http:3000/users/1

  this.api.adminDetails().subscribe({
    next:(result:any)=>{
      console.log(result);

      if(this.email===result.email&&this.password===result.password){
        alert('autherization success')

        this.home.navigateByUrl('home')

      }else(
        alert('invalid admin details')
      )
      

    },
    error:(res:any)=>{
      console.log(res);
      
    }

  })
  
}
else{
  alert("please fill the form completely")
}

  }


}
