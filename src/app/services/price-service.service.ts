import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class PriceServiceService {
  

  constructor(private http: HttpClient) { }

  getPriceList(): Observable<Currency[]>{
    return this.http.get(`${environment.API_URL}/price`)
      .pipe(
        map(response => response as Currency[])
      )
  }

}
