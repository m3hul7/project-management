import { TestBed } from '@angular/core/testing';

import { ProjectOverviewPresenterService } from './project-overview-presenter.service';

describe('ProjectOverviewPresenterService', () => {
  let service: ProjectOverviewPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectOverviewPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
