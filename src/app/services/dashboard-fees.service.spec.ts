import { TestBed } from '@angular/core/testing';

import { DashboardFeesService } from './dashboard-fees.service';

describe('DashboardFeesService', () => {
  let service: DashboardFeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardFeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
