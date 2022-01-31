import { TestBed } from '@angular/core/testing';

import { CdclickedService } from './cdclicked.service';

describe('CdclickedService', () => {
  let service: CdclickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdclickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
