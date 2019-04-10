import { TestBed } from '@angular/core/testing';

import { ConectDataService } from './conect-data.service';

describe('ConectDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConectDataService = TestBed.get(ConectDataService);
    expect(service).toBeTruthy();
  });
});
