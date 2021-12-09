import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/model/currency';



@Component({
  selector: 'app-price-banner',
  templateUrl: './price-banner.component.html',
  styleUrls: ['./price-banner.component.css']
})
export class PriceBannerComponent implements OnInit {

  currencies: Currency[] = [
    {id: 0, name: 'btc', price: 10000},
    {id: 1, name: 'eth', price: 200},
    {id: 2, name: 'ltc', price: 100},
    {id: 3, name: 'monero', price: 25},
    {id: 4, name: 'doge', price: 1}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
