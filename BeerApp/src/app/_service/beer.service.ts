import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from '../_models/beer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private httpClient: HttpClient) { }

  getBeer(): Observable<Array<IBeer>> {
    return this.httpClient
    .get<Array<IBeer>>(environment.apiUrl + 'beers');
  }

  getBeerById(id: number) {
    return this.httpClient
    .get(environment.apiUrl + 'beers/' + id);
  }


  getRightBeer(parameter: string): Observable<Array<IBeer>> {
    return this.httpClient
    .get<Array<IBeer>>(environment.apiUrl + 'beers?food=' + parameter);
  }

  getPage(parameter: number): Observable<Array<IBeer>> {
    return this.httpClient
    .get<Array<IBeer>>(environment.apiUrl + 'beers?page=' + parameter);
  }
}
