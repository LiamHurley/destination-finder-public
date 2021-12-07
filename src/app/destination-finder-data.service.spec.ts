import { TestBed } from '@angular/core/testing';

import { DestinationFinderDataService } from './destination-finder-data.service';

describe('DestinationFinderDataService', () => {
  let service: DestinationFinderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationFinderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
