import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AddService } from 'src/app/services/add';
import { UserStatsService } from 'src/app/services/user-stats.service';
import {MatDialog} from '@angular/material/dialog';
import { ErrorMsgComponent } from '../dialogs/error-msg/error-msg.component';
import { SuccessMsgComponent } from '../dialogs/success-msg/success-msg.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  UserArray= [];
  constructor(private userService: UserStatsService, private addService: AddService,
    public dialog: MatDialog) {
    this.getUser();
   }

  user?: User; 
  
  getUser() {
  this.userService.getUser().subscribe((response: any) => {this.user = response;
    this.UserArray= response;
  })
  }
   
  ngOnInit(): void {}

  message: string = '';
  update(username: string, password : string, email : string) {
    
    this.addService.update(username, password, email,).subscribe(
      (response) => {
        this.dialog.open(SuccessMsgComponent);
      },
      err => {
        this.dialog.open(ErrorMsgComponent);
        ;
      }
    );
    }
}
