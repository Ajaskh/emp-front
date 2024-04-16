import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

// property

allUsers:userSchema[]=[]


  constructor(private api:ApiService){}
  ngOnInit(): void {
   
    this.getUserList()

  }

  


  // when userlist page open display all users from json file





  // to get details of employees create function

  getUserList(){
    this.api.getAllusers().subscribe({
      next:(result:any)=>{
        console.log(result);
        
      },
      error:(res:any)=>{
        console.log(res);
        
      }
    })
  }

}
