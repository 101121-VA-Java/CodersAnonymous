import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ToplistService } from 'src/app/services/toplist.service';
import { UserStatsService } from 'src/app/services/user-stats.service';
import {MatDialog} from '@angular/material/dialog';
import { UserInfoComponent } from '../user-info/user-info.component';

import {Router} from "@angular/router"

@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.css']
})
export class ToplistComponent implements OnInit {

  constructor(private toplistService: ToplistService, 
    private userService: UserStatsService, public dialog: MatDialog, private router : Router) {
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
    
    this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });
    
    
  }

  reloadTopList() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
  }

  userInfo() {
    
      const dialogRef = this.dialog.open(UserInfoComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
  }


}
