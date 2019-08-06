import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from 'src/app/_service/beer.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  constructor(private beerService: BeerService, private modalService: NgbModal) { }

  ngOnInit() {
  }



}
