import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { User } from "./user";
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user!:User
  repository!:Repos
  repoData: any=[]
  newUserData:any=[]

  constructor(private http:HttpClient) {
    this.user= new User("", "", "", "", "", 0, new Date())
    this.repository= new Repos("","", "", new Date(), "", "")
   }
   getUserDetails(username:string){
    interface ApiResponse{
      name:string,
      avatar_url:string,
      login: string,
      bio:string,
      company:string,
      public_repos:number,
      created_at:Date
    }
    


}
