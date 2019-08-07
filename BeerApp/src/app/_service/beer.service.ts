import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private httpClient: HttpClient) { }

  getBeer() {
    return this.httpClient
  }

  getBeerById(id: number) {
    return this.httpClient
  }
}
