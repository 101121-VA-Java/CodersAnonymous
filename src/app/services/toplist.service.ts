import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ToplistService {

  constructor(private http: HttpClient) { }

  getToplist(): Observable<User[]>{
    return this.http.get(`${environment.API_URL}/top`)
      .pipe(
        map(response => response as User[])
      )
  }
}
