import { TestBed, inject } from '@angular/core/testing';

import { HostingService } from './hosting.service';

describe('HostingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostingService]
    });
  });

  it('should be created', inject([HostingService], (service: HostingService) => {
    expect(service).toBeTruthy();
  }));
});
