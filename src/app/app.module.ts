import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyRepositoriesComponent } from './my-repositories/my-repositories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { GitHubService } from './git-hub.service';


@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    MyRepositoriesComponent,
    NavbarComponent,
    SearchFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
