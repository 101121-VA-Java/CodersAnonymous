import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

message: string = '';

login(username: string, password: string) {
console.log("test");
  this.loginService.authenticate(username, password).subscribe(
    (response) => {
      // // navigates us back to the main page
      // this.router.navigate(['']);
    },
    err => {
      this.message = err.error.error;
    }
  );

}

}