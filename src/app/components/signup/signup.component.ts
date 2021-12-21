import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private addService: AddService) { }

  ngOnInit(): void {
  }

  // message: string = '';

  reg(username: string, password: string, email: string) {

    this.addService.addUser(username, password, email).subscribe(
      (response) => {
        alert("Success! User Created!");
       },
      err => {
        console.log(err);
        alert("Success! User Created!");
        ;
      }
    );

  }
}