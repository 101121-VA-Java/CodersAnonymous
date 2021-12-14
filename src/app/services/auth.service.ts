import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Principal } from '../model/principal';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser?: Principal;
  token: string = '';

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
        console.log(this.token);
      }
      )
    );

  }

  // logout(): void {
  //   this.currentUser = undefined;
  //   this.token = '';
  // }

  // registerUser(firstName: string, lastName: string, username: string, password: string, email: string){
  //   let newUser: any = {username, password, firstName, lastName, email, role:'USER'}
  //   console.log(newUser);
  //   return this.http.post(`${environment.API_URL}/users`, newUser, {
  //     headers: {
  //         'Content-type': 'application/json'
  //       },
  //       observe: 'response',
  //     }).pipe(
  //       map(response => {
  //         newUser = response.body;
  //         console.log(this.token);
  //       }
  //       )
  //     );
  
  //   }
  
}