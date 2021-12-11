import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const URL = 'http://localhost:8080' 
const httpOptions = {headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};
@Injectable({
    providedIn: 'root'
  })

export class signupService {

  constructor(private http: HttpClient) { }
  register(userName: string, password: string, email: string): Observable<any> {
        return this.http.post(URL + '/users', { userName,  password, email}, httpOptions);}     
  }