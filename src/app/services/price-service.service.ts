import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class PriceServiceService {
  

  constructor(private http: HttpClient) { }

  getPriceList(): Observable<Currency[]>{
    return this.http.get('http://localhost:8080/price')
      .pipe(
        map(response => response as Currency[])
      )
  }

}
