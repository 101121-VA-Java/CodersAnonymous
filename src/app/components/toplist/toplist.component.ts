import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ToplistService } from 'src/app/services/toplist.service';

@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.css']
})
export class ToplistComponent implements OnInit {

  constructor(private toplistService: ToplistService) {
    this.getPrices();
   }
  ngOnInit(): void {
  }

  toplist?: User[]; 
  
  getPrices() {
  this.toplistService.getToplist().subscribe((response: any) => {this.toplist = response;
  
  })
  }

}
