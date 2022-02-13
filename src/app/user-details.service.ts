import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { User } from  './user'
import { Repos } from './repos'
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService{
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
     let promise =new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/" +username+'?access_token='+environment.apiKey ).toPromise().then(response=>{
         this.user.name = Response.name
        
         

         resolve()
       },error=>{
         reject(error)
       })
       this.http.get<any>("https://api.github.com/users/" +username+"/repos").toPromise().then(response=>{
           for(let j=0; j<response.length; j++){
             this.newUserData=new Repos(response[j].html_url, response[j].name, response[j].description, response[j].updated_at, response[j].clone_url, response[j].language);
             this.repoData.push(this.newUserData)
           }
           resolve()
       },error=>{
         reject(error)
       })
     })
     return promise
   } 
}
