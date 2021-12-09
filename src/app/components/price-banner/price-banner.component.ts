import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/model/currency';
import { PriceServiceService } from 'src/app/price-service.service';



@Component({
  selector: 'app-price-banner',
  templateUrl: './price-banner.component.html',
  styleUrls: ['./price-banner.component.css']
})
export class PriceBannerComponent implements OnInit {

  constructor(private priceService: PriceServiceService) {
    this.getPrices();
   }

  currencies?: Currency[]; 
  
  getPrices() {
  this.priceService.getPriceList().subscribe((response: any) => {this.currencies = response;
  
  })
  }



  ngOnInit(): void {}

}
