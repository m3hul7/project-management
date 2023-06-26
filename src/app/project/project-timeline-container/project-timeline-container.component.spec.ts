import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimelineContainerComponent } from './project-timeline-container.component';

describe('ProjectTimelineContainerComponent', () => {
  let component: ProjectTimelineContainerComponent;
  let fixture: ComponentFixture<ProjectTimelineContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTimelineContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTimelineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
