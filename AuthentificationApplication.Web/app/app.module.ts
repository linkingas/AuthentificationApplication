import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
 

import { PageNotFoundComponent } from './Others/pageNotFound.component';

import { AuthenticationService } from "./login/authentication.service";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuard} from './_guards/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent }
];
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,LoginComponent, PageNotFoundComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [ AuthenticationService,AuthGuard]
})
export class AppModule { }
