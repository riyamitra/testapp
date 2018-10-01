import { TestBed } from '@angular/core/testing';

import { DashboardStageService } from './dashboard-stage.service';

describe('DashboardStageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardStageService = TestBed.get(DashboardStageService);
    expect(service).toBeTruthy();
  });
});
