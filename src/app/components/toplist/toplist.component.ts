import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ToplistService } from 'src/app/services/toplist.service';
import { UserStatsService } from 'src/app/services/user-stats.service';
import {MatDialog} from '@angular/material/dialog';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.css']
})
export class ToplistComponent implements OnInit {

  constructor(private toplistService: ToplistService, 
    private userService: UserStatsService, public dialog: MatDialog) {
    this.getPrices();
    this.getUser();
   }
  ngOnInit(): void {
  }

  toplist?: User[]; 
  user?: User; 
  
  getPrices() {
  this.toplistService.getToplist().subscribe((response: any) => {this.toplist = response;
  
  })
  }
  getUser() {
    this.userService.getUser().subscribe((response: any) => {this.user = response;
    
    })
    }

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  userInfo() {
    
      const dialogRef = this.dialog.open(UserInfoComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
  }

}
