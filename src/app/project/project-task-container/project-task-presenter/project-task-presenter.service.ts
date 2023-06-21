import { Overlay } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

import { ComponentPortal } from '@angular/cdk/portal';
import { TaskFormComponent } from 'src/app/shared/task-form/task-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectTaskPresenterService {
  private taskForm! :FormGroup
  constructor(private _overlay: Overlay, private formBuilder: FormBuilder) { 
    this.taskForm = this.buildTaskForm()
  }

  public displayOverlay(){
    const overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'backdrop',
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
    });
    const newProjectPortal = new ComponentPortal(TaskFormComponent)
    const componentRef =  overlayRef.attach(newProjectPortal);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    })
    componentRef.instance.taskForm = this.taskForm
    componentRef.instance.close.subscribe(() => {
      overlayRef.detach();
    })
  }

  public buildTaskForm(): FormGroup {
    return this.formBuilder.group({
      taskImage: [''],
      taskName: ['',[Validators.required]],
      taskAssignees: ['',[Validators.required]],
      taskTags: ['',[Validators.required]],
      taskState: ['',[Validators.required]],
      taskArea: ['',[Validators.required]],
      taskDescription: ['',[Validators.required]],
      taskPlanning: this.formBuilder.group({
        taskPriority: ['',[Validators.required]],
        taskActivity: ['',[Validators.required]],
      }),
      taskEffort: this.formBuilder.group({
        taskOriginalEstimate: ['',[Validators.required]],
        taskRemaining: ['',[Validators.required]],
        taskCompleted: ['',[Validators.required]],
      })
    })
  }
}
