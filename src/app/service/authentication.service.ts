import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class GuestbookUser {
  constructor(
    public id: number | undefined,
    public name: string | undefined,
    public email: string | undefined,
    public type: string | undefined
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const parameters = new HttpParams();
    parameters.set("userName", username);

    return this.httpClient.post<GuestbookUser>('http://localhost:8080/validateLogin', new GuestbookUser(undefined, username, undefined, undefined), { headers: headers, params: parameters }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          sessionStorage.setItem('userId', String(userData.id));
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
