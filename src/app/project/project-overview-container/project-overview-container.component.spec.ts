import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverviewContainerComponent } from './project-overview-container.component';

describe('ProjectOverviewContainerComponent', () => {
  let component: ProjectOverviewContainerComponent;
  let fixture: ComponentFixture<ProjectOverviewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOverviewContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
