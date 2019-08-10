import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { BeerService } from '../_service/beer.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IBeer } from '../_models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  constructor(private beerService: BeerService) {
  myBeer: IBeer[];
  modalRef: NgbModalRef;
  uniqueFood: Array<string> = [];
  isUnique: boolean;
  isFirstTime: boolean;
  matchingBeerArray: Array<string> = [];
  matchingBeer: IBeer[];
  isSelectFood: boolean;

  constructor(private beerService: BeerService, private modalService: NgbModal) {
    this.isFirstTime = true;
    this.isSelectFood = false;
  }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.beerService.getBeer().subscribe(beer => {
      console.log(beer);

      this.myBeer = beer;

      this.addUniqueFoodToArray();
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

  openModal(id: number) {
    this.modalRef = this.modalService.open(IngredientsComponent, { size: 'sm', backdrop: false });
    this.modalRef.componentInstance.beerId = id;
  }
}
