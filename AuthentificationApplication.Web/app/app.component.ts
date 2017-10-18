import { Component } from '@angular/core';
import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
 


})
export class AppComponent {
  


  constructor(private authenticationService:AuthenticationService) {  }
  

  onClick(): void {
    console.log('clickecd ');
  }
  logout() {
    this.authenticationService.logout();
  }

  


}
