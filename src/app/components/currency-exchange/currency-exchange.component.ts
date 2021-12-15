import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit {

  constructor( private ExchangeService : ExchangeService) { }

  ngOnInit(): void {
  }


  exchange(amount: string, from: string, to : string) {
    console.log(amount + from + to);
    this.ExchangeService.exchange(amount, from, to).subscribe(
      (response) => {
       alert("Success!");
      },
      err => {
        console.log(err);
        alert("Something went wrong!");
        ;
      }
    );

  }

}
