import { TestBed } from '@angular/core/testing';

import { MyAapServiceService } from './my-aap-service.service';

describe('MyAapServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAapServiceService = TestBed.get(MyAapServiceService);
    expect(service).toBeTruthy();
  });
});
