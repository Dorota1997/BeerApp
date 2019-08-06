import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  url = 'https://api.punkapi.com/v2/';
  constructor(private httpClient: HttpClient) { }

  getBeer() {
    return this.httpClient
    .get(this.url + 'beers');
  }

  getBeerById(id: number) {
    return this.httpClient
    .get(this.url + 'beers/' + id);
  }
}
