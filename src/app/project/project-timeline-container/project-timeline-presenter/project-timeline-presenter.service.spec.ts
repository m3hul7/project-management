import { TestBed } from '@angular/core/testing';

import { ProjectTimelinePresenterService } from './project-timeline-presenter.service';

describe('ProjectTimelinePresenterService', () => {
  let service: ProjectTimelinePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTimelinePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
