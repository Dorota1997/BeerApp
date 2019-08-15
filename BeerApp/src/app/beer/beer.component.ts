import { Component, OnInit } from '@angular/core';
import { BeerService } from '../_service/beer.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IBeer } from '../_models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  myBeer: IBeer[];
  modalRef: NgbModalRef;
  uniqueFood: Array<string> = [];
  isUnique: boolean;
  isFirstTime: boolean;
  matchingBeerArray: Array<string> = [];
  matchingBeer: IBeer[];
  isSelectFood: boolean;
  pageNumbers: Array<number> = [];
  tmpColor: string;

  myColors: Array<string> = ['#96ceb4', '#ffeead', '#ff6f69', '#ffcc5c', '#88d8b0', '#eea990', '#a39193', '#f69f72',
                            '#f66b6b', '#ab8667', '#98e287', '#6ea4e1', '#db6972'];
  constructor(private beerService: BeerService, private modalService: NgbModal) {
    this.isFirstTime = true;
    this.isSelectFood = false;
  }

  ngOnInit() {
    this.getBeers();
    this.setNumberOfPage();
  }

  randomizeCardBodyColor() {
    this.tmpColor = this.myColors[Math.floor(Math.random() * this.myColors.length)];
    return this.tmpColor;
  }

  getBeers() {
    this.beerService.getBeer().subscribe(beer => {
      console.log(beer);

      this.myBeer = beer;

      this.addUniqueFoodToArray();
    });
  }

  setNumberOfPage() {
    const value = 325;
    const numberBeerOnPage = 25;
    const result = value / numberBeerOnPage;

    for (let i = 1; i <= result; i++) {
      this.pageNumbers.push(i);
    }
    console.log(this.pageNumbers);
  }

  getBeersOfPage(value: number) {
    console.log(value);

    this.beerService.getPage(value).subscribe(beer => {
      console.log(beer);

      this.myBeer = beer;
    });
  }

  selectFood(value: string) {
    console.log('Wybrane', value);
    const afterSelectFood = document.getElementById('selectFood');
    const firstBeerSection = document.getElementById('startBeers');

    if (value !== 'everything') {
      this.beerService.getRightBeer(value).subscribe(beer => {
        console.log(beer);

        firstBeerSection.style.display = 'none';
        if (afterSelectFood.style.display === 'none') {
          afterSelectFood.style.display = 'block';
        }

        this.isSelectFood = true;
        this.matchingBeer = beer;
        // console.log(this.matchingBeer);
      });
    } else {
      console.log('nic nie zwraca');

      afterSelectFood.style.display = 'none';
      if (firstBeerSection.style.display === 'none') {
        firstBeerSection.style.display = 'block';
      }
    }


  }

  addUniqueFoodToArray() {
    for (const object of this.myBeer) {
      // console.log('ob => ' + object.food_pairing);

      // runs only first time when function is called
      if (this.isFirstTime) {
        for (const food of object.food_pairing) {
          this.uniqueFood.push(food);
        }
        this.isFirstTime = false;
        // console.log('State of array');
        // console.log(this.uniqueFood);

        continue;
      }

      for (const foodCandidat of object.food_pairing) {
        // console.log('foods => ' + foodCandidat);
        this.isUnique = false;

        for (const uniqueFood of this.uniqueFood) {

          if (foodCandidat === uniqueFood) {
            this.isUnique = false;
            break;
          }

          this.isUnique = true;
        }

        if (this.isUnique) {
          this.uniqueFood.push(foodCandidat);
        }
      }
    }

    console.log(this.uniqueFood);
  }

}
