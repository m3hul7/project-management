import { Component } from '@angular/core';

@Component({
  selector: 'app-project-overview-presentation',
  templateUrl: './project-overview-presentation.component.html',
  styleUrls: ['./project-overview-presentation.component.scss']
})
export class ProjectOverviewPresentationComponent {
  public project = {
    "projectName": "StrataScratch - The Place To Master Coding",
    "projectDescription": "[webpack-dev-server] Server started: Hot Module Replacement disabled, Live Reloading enabled, Progress disabled, Overlay enabled. 'm also facing this type of a situation, instead of click I want to create a popover 'mouseenter'. I created a custom directive for showing this, and I'm listening to 'mouseenter' to create an overlay. The issue is when I move form one element to other I need to remove the old one. We can't simply detach() on 'mouseleave because the popover should be closed only while clicking outside. Any suggestions ?",
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
