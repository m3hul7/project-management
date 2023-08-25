import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFileContainerComponent } from './project-file-container.component';

describe('ProjectFileContainerComponent', () => {
  let component: ProjectFileContainerComponent;
  let fixture: ComponentFixture<ProjectFileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFileContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
