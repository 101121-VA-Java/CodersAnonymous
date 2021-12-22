import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add';
import {MatDialog} from '@angular/material/dialog';
import { ErrorMsgComponent } from '../dialogs/error-msg/error-msg.component';
import { SuccessMsgComponent } from '../dialogs/success-msg/success-msg.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private addService: AddService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // message: string = '';

  reg(username: string, password: string, email: string) {

    this.addService.addUser(username, password, email).subscribe(
      (response) => {        
        this.dialog.open(SuccessMsgComponent);
       },
      err => {        
        this.dialog.open(ErrorMsgComponent);
      }
    );

  }
}