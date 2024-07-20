import { TestBed } from '@angular/core/testing';

import { PersonsServicesService } from './persons-services.service';

describe('PersonsServicesService', () => {
  let service: PersonsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
