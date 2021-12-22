import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AddService } from 'src/app/services/add';
import { UserStatsService } from 'src/app/services/user-stats.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  UserArray= [];
  constructor(private userService: UserStatsService, private addService: AddService) {
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
        alert("Success! User Updated!");
      },
      err => {
        this.message = err.console.error();
        ;
      }
    );
    }
}
