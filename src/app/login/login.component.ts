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
  this.loginService.authenticate(username, password).subscribe(
    (response) => {
    
    },
    err => {
      this.message = err.error.error;
    }
  );

}

}