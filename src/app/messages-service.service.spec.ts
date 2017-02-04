/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessagesServiceService } from './messages-service.service';

describe('MessagesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesServiceService]
    });
  });

  it('should ...', inject([MessagesServiceService], (service: MessagesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
