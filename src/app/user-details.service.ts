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
  


}
