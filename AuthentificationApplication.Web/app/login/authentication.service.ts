import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http) {
   
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {

    let url: string = 'http://localhost:11857/api/Authenticate';

    var model = { Email: username, password: password };
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });        

    return this.http.post(url, body, options)
      .map((response: Response) => {

        let token = response.json() && response.json().token;

        if (token) {
          let email = response.json() && response.json().dbUser.email;
          localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token }));
          return true;
        } else
          return false;


      });

  }


  GetUserCredentials(email: string, token: string): Observable<boolean> {
    let url: string = 'http://localhost:11857/api/Confidential';
    var model = { Email: email, password: "",Token : token };
    let body = JSON.stringify(model);
    let headers = new Headers({
      'Content-Type': 'application/json', 'Authorization':'Bearer ' + token


    });

    
    
    let options = new RequestOptions({ headers: headers });        

    return this.http.post(url, body, options)

      .map((response: Response) => {

        if (response.json()) return true;

        return false;

      });


  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}