import { Component, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto'
import { User } from 'src/app/model/user';
import { ExchangeService } from 'src/app/services/exchange.service';
import { UserStatsService } from 'src/app/services/user-stats.service';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import { ErrorMsgComponent } from '../dialogs/error-msg/error-msg.component';
import { SuccessMsgComponent } from '../dialogs/success-msg/success-msg.component';


@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit {

  constructor( private ExchangeService : ExchangeService,
    private UserStatsService : UserStatsService, private router : Router, public dialog: MatDialog
    ) { }

  ngOnInit(): void {   
    this.getUser();
    if (sessionStorage.getItem('userRole')=='vip'){
      this.isVip = true;
    }
  }


  exchange(amount: string, from: string, to : string) {
    this.ExchangeService.exchange(amount, from, to).subscribe(
      (response) => {
      this.dialog.open(SuccessMsgComponent);
       this.reloadComponent();
      },
      err => {
        this.dialog.open(ErrorMsgComponent);
        ;
      }
    );

  }

currentAmount: string = "";  
displayFrom: string = "";  
displayTo: string = "";
user?: User; 
rawAmount?: User; 
isVip : boolean = false;
hideLoading = true;
getUser() {
  this.UserStatsService.getUser().subscribe((response: any) => {
    this.user = response;
    this.ExchangeService.getCoinValues().subscribe((response: any) => {
      this.rawAmount = response;   
    this.insertchart();   
    document.getElementById('spinner')!.hidden = true;
    })
  
  })
  }
insertchart() {
  var xValues = ["BTC: "+ this.rawAmount?.btc.toFixed(3),
   "ETH: "+ this.rawAmount?.eth.toFixed(3),
   "LTC: "+ this.rawAmount?.ltc.toFixed(3), 
    "XMR: "+ this.rawAmount?.xmr.toFixed(3),
   "TRX: "+ this.rawAmount?.trx.toFixed(3)];
  var yValues = 
    [this.user?.btc,
     this.user?.eth, 
     this.user?.ltc,
     this.user?.xmr, 
     this.user?.trx];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  new Chart("availableCurrencies", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },

  });
}

reloadComponent() {
  let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

}
