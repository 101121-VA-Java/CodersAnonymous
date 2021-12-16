import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserStatsService } from 'src/app/services/user-stats.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  UserArray= [];
  constructor(private userService: UserStatsService) {
    this.getUser();
   }

  user?: User; 
  
  getUser() {
  this.userService.getUser().subscribe((response: any) => {this.user = response;
    this.UserArray= response;
  })
  }
   
  ngOnInit(): void {}

}
