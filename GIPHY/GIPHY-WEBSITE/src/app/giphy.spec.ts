import { TestBed } from '@angular/core/testing';

import { Giphy } from './giphy';

describe('Giphy', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create an instance', () => {
    expect(new Giphy()).toBeTruthy();
  });
});
