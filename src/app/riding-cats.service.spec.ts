/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RidingCatsService } from './riding-cats.service';

describe('Service: RidingCats', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RidingCatsService]
    });
  });

  it('should ...', inject([RidingCatsService], (service: RidingCatsService) => {
    expect(service).toBeTruthy();
  }));
});
