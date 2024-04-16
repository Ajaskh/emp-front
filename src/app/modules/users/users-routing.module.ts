import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [

  // http://localhost:4200/users
  { path: "", component: UsersListComponent },

  // http://localhost:4200/add
  {path:"add",component:AddUserComponent},

  // http://localhost:4200/users/edit/100
  {path:"edit/:id",component:EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
