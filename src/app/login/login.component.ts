import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // siteKey : string;
  
  constructor(private loginService: LoginService) { 
    // this.siteKey = '6Lf51c4dAAAAAMK1VAat1kM8zz5riLFDtf6PvjXh';
  }

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