import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component'
import { SearchFormComponent } from './search-form/search-form.component'
import {  NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"my-profile", component:MyProfileComponent},
  {path:"search-repository", component:SearchFormComponent},
  {path: "", redirectTo:"/my-profile", pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
