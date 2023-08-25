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
import { ProjectTimelineContainerComponent } from './project-timeline-container/project-timeline-container.component';
import { ProjectTimelinePresentationComponent } from './project-timeline-container/project-timeline-presentation/project-timeline-presentation.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ProjectFileContainerComponent } from './project-file-container/project-file-container.component';
import { ProjectFilePresentationComponent } from './project-file-container/project-file-presentation/project-file-presentation.component';
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';

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
    ProjectTimelineContainerComponent,
    ProjectTimelinePresentationComponent,
    ProjectFileContainerComponent,
    ProjectFilePresentationComponent,
    HorizontalScrollDirective,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    DragDropModule,
    FullCalendarModule,
    SharedModule,
  ]
})
export class ProjectModule { }
