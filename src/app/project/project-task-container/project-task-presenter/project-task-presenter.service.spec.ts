import { TestBed } from '@angular/core/testing';

import { ProjectTaskPresenterService } from './project-task-presenter.service';

describe('ProjectTaskPresenterService', () => {
  let service: ProjectTaskPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTaskPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
