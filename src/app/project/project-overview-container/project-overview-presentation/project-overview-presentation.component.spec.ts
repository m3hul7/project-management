import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverviewPresentationComponent } from './project-overview-presentation.component';

describe('ProjectOverviewPresentationComponent', () => {
  let component: ProjectOverviewPresentationComponent;
  let fixture: ComponentFixture<ProjectOverviewPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOverviewPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOverviewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
