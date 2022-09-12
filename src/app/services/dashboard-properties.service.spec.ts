import { TestBed } from '@angular/core/testing';

import { DashboardPropertiesService } from './dashboard-properties.service';

describe('DashboardPropertiesService', () => {
  let service: DashboardPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
