import { TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  let service: GiphyService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyService);
  });

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });
});
