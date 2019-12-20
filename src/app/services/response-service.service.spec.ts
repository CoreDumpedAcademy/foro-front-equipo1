import { TestBed } from '@angular/core/testing';

import { ResponseServiceService } from './response-service.service';

describe('ResponseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseServiceService = TestBed.get(ResponseServiceService);
    expect(service).toBeTruthy();
  });
});
