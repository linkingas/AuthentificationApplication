
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../login/authentication.service';
import { Router } from '@angular/router';

@Component({
  // ReSharper disable once InvalidValue
  template: `
         <h1>This is the home page</h1>

<button (click)="logout()"   class="width-35 pull-left btn btn-sm btn-primary">	<i class="ace-icon fa fa-key"></i>
      <span class="bigger-110">Logout</span></button>
          `
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

    var current = JSON.parse(localStorage.getItem("currentUser"));
    let email = current &&current.username ?current.username :'';
    let token = current &&current.token ? current.token :'';
    this.checkIfConnected(email, token);

  }
  checkIfConnected(email: string, token: string) {

  return   this.authenticationService.GetUserCredentials(email, token)
      .subscribe(result => {
        if (result) {
          alert("connected");
       
        } else {
          alert("not connected");

    
        }
      });

    

  }
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  logout() {

    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }
}