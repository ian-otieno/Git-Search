import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

 private username:string
  private myRepos: any


  constructor(private http:HttpClient) { 
    this.username="ian-otieno"
    this.myRepos="repos"
  }
  getProfileData(){
    return this.http.get("https://api.github.com/users/ian-otieno")
  };
  getMyRepos(){
    return this.http.get("https://api.github.com/users/ian-otieno/repos")
  }

}
