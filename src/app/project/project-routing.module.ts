import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectTaskContainerComponent } from './project-task-container/project-task-container.component';
import { ProjectOverviewContainerComponent } from './project-overview-container/project-overview-container.component';
import { ProjectTimelineContainerComponent } from './project-timeline-container/project-timeline-container.component';
import { ProjectFileContainerComponent } from './project-file-container/project-file-container.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProjectComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: ProjectOverviewContainerComponent
      },
      {
        path: 'task',
        component: ProjectTaskContainerComponent
      },
      {
        path: 'timeline',
        component: ProjectTimelineContainerComponent
      },
      {
        path: 'file',
        component: ProjectFileContainerComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
