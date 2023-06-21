import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskPresentationComponent } from './project-task-presentation.component';

describe('ProjectTaskPresentationComponent', () => {
  let component: ProjectTaskPresentationComponent;
  let fixture: ComponentFixture<ProjectTaskPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTaskPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTaskPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
