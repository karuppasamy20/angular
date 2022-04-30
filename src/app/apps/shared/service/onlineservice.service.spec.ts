import { TestBed } from '@angular/core/testing';

import { OnlineserviceService } from './onlineservice.service';

describe('OnlineserviceService', () => {
  let service: OnlineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
