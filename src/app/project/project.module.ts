import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectViewContainerComponent } from './project-view-container/project-view-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectViewPresentationComponent } from './project-view-container/project-view-presentation/project-view-presentation.component';
import { ProjectTaskContainerComponent } from './project-task-container/project-task-container.component';
import { ProjectTaskPresentationComponent } from './project-task-container/project-task-presentation/project-task-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectOverviewContainerComponent } from './project-overview-container/project-overview-container.component';
import { ProjectOverviewPresentationComponent } from './project-overview-container/project-overview-presentation/project-overview-presentation.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListContainerComponent,
    ProjectViewContainerComponent,
    ProjectListPresentationComponent,
    ProjectViewPresentationComponent,
    ProjectTaskContainerComponent,
    ProjectTaskPresentationComponent,
    ProjectOverviewContainerComponent,
    ProjectOverviewPresentationComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    DragDropModule,
    SharedModule,
  ]
})
export class ProjectModule { }
