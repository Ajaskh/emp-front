import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },

// http://localhost:4200 
{path:"",component:LoginComponent},

// http://localhost:4200/home

{path:"home",component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
