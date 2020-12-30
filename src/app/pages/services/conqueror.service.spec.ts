import { TestBed } from '@angular/core/testing';

import { ConquerorService } from './conqueror.service';

describe('ConquerorService', () => {
  let service: ConquerorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConquerorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
