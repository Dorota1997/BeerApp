import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { BeerService } from '../_service/beer.service';
@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  constructor(private beerService: BeerService) {
  myBeer;
  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.beerService.getBeer().subscribe(beer => {
      console.log(beer);

      this.myBeer = beer;
    });
  }
  }
}
