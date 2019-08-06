import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from 'src/app/_service/beer.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() beerId: any;
  constructor(private beerService: BeerService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  getOneBeer(id: number) {
    this.beerService.getBeerById(id).subscribe(beer => {
      console.log(beer);
      this.beerDetails = beer;
    });
  }


}
