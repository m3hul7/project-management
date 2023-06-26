import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimelinePresentationComponent } from './project-timeline-presentation.component';

describe('ProjectTimelinePresentationComponent', () => {
  let component: ProjectTimelinePresentationComponent;
  let fixture: ComponentFixture<ProjectTimelinePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTimelinePresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTimelinePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
