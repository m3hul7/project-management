import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskContainerComponent } from './project-task-container.component';

describe('ProjectTaskContainerComponent', () => {
  let component: ProjectTaskContainerComponent;
  let fixture: ComponentFixture<ProjectTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTaskContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
