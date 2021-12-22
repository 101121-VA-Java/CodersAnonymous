import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

exchange (amount: string, from: string, to : string) {

  let exchangeInfo = `userId=${sessionStorage.getItem("userId")}&amount=${amount}&from=${from}&to=${to}`

  // dummy data
  // let exchangeInfo = `userId=2&amount=${amount}&from=${from}&to=${to}`

      return this.http.put(`${environment.API_URL}/exchange`, exchangeInfo, {
        headers: {
        // leverages form params to not expose credentials to the url
          'Content-type': 'application/x-www-form-urlencoded'
        },
      })

}
getCoinValues(): Observable<User>{
  return this.http.get(`${environment.API_URL}/user/coins/` + sessionStorage.getItem("userId"))
    .pipe(
      map(response => response as User)
    )
}

}
