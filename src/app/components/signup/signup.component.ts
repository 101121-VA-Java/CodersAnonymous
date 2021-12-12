import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/service/add';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private addService: AddService) { }

  ngOnInit(): void {
  }

  message: string = '';

  reg(username: string, password: string, email: string) {

    this.addService.addUser(username, password, email,).subscribe(
      (response) => {
        // navigates us back to the main page
        // this.router.navigate(['']);
      },
      err => {
        this.message = err.console.error();
        ;
      }
    );

  }
}

