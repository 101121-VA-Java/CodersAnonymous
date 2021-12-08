import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-price-banner',
  templateUrl: './price-banner.component.html',
  styleUrls: ['./price-banner.component.css']
})
export class PriceBannerComponent implements OnInit {

  prices = {
    BTC: 10000,
    ETH: 50,
    LTC: 25,
    MONERO: 15,
    DOGE: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
