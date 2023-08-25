import { TestBed } from '@angular/core/testing';

import { ProjectFilePresenterService } from './project-file-presenter.service';

describe('ProjectFilePresenterService', () => {
  let service: ProjectFilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
