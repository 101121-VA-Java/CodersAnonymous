import { HttpClient } from '@angular/common/http';
import { SelectorListContext } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';


@Injectable({
  providedIn: 'root'
})
export class AddService {


  constructor(private http: HttpClient, private loginService: LoginService ) { }

role: any
  addUser(username: string, password: string, email: string) {
    if(email === ""){
        this.role = "basic"
    }else{
        this.role = "vip"
    }
    
    let credentials = `username=${username}&password=${password}&email=${email}&role=${this.role}`
console.log(credentials); 
    
    return this.http.post(`${environment.API_URL}/user`, credentials, {
      headers: {
      // leverages form params to not expose credentials to the url
        'Content-type': 'application/x-www-form-urlencoded'
      },
     
    })
   
    }
    message: string = '';
    login(username: string, password: string) {
      console.log("test");
        this.loginService.authenticate(username, password).subscribe(
          (response) => {
          
          },
          err => {
            this.message = err.error.error;
          }
        );
      
      }
    
}