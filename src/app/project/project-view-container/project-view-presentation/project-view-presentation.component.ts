import { Component } from '@angular/core';

@Component({
  selector: 'app-project-view-presentation',
  templateUrl: './project-view-presentation.component.html',
  styleUrls: ['./project-view-presentation.component.scss']
})
export class ProjectViewPresentationComponent {
  public project = {
    "projectName": "StrataScratch - The Place To Master Coding",
    "projectDescription": "[webpack-dev-server] Server started: Hot Module Replacement disabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
    "projectManager": "Mehul Patel",
    "projectStartDate": "2022-09-21",
    "projectEstimatedEndDate": "2022-09-22",
    "category": "Non-Profit",
    "billingType": "Fix",
    "projectStatus": "new",
    "taskList": [],
    "id": 2
  }
}
