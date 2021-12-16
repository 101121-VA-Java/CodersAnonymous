import { HttpClient } from '@angular/common/http';
import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Principal } from './model/principal';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser?: Principal;
  token: string = '';
  response: any = '';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {

    let credentials = `username=${username}&password=${password}`;

    return this.http.post(`${environment.API_URL}/auth`, credentials, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      observe: 'response',
    }).pipe(
      map(response => {
        this.currentUser = response.body as Principal;
        this.token = response.headers.get('Authorization') || '';
        sessionStorage.setItem("token", this.token);        
        sessionStorage.setItem("userId",this.token.split(":")[0] );
        sessionStorage.setItem("userRole",this.token.split(":")[1] );
        window.location.reload();
      }
      )
    );
  
  }

  logout(): void {
    this.response = undefined;
    this.token = '';
    sessionStorage.clear();
  }

}