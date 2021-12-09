import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Currency } from './model/currency';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PriceServiceService {
  

  constructor(private http: HttpClient) { 
  }
  getPrice(id: number) {
    return this.http.get('https://localhost:8080/price');
}
// Needs work!!!
  // getPriceList(id: number): Observable<Currency[]>{
  //   return this.http.get('https://localhost:8080/price')
  //     .pipe(
  //       map(response => response as Currency[])
  //     ), () => console.log();
  // }

}
