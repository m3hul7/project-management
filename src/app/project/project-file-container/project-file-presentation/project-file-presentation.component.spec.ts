import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFilePresentationComponent } from './project-file-presentation.component';

describe('ProjectFilePresentationComponent', () => {
  let component: ProjectFilePresentationComponent;
  let fixture: ComponentFixture<ProjectFilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFilePresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
