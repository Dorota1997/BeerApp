/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerService } from './beer.service';

describe('Service: Beer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerService]
    });
  });

  it('should ...', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));
});
