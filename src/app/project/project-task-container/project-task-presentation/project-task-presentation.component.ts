import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ProjectTaskPresenterService } from '../project-task-presenter/project-task-presenter.service';

@Component({
  selector: 'app-project-task-presentation',
  templateUrl: './project-task-presentation.component.html',
  styleUrls: ['./project-task-presentation.component.scss']
})
export class ProjectTaskPresentationComponent {

  public newTask: any[] = []
  public onprogress: any[] = []
  public onreview: any[] = []
  public complete: any[] = []

  public viewFlag: String 


  constructor(private _service: ProjectTaskPresenterService) {
    this.newTask = this.taskList.filter(val => val.taskFormType === "new")
    this.onprogress = this.taskList.filter(val => val.taskFormType === "onprogress")
    this.onreview = this.taskList.filter(val => val.taskFormType === "onreview")
    this.complete = this.taskList.filter(val => val.taskFormType === "completed")
    this.viewFlag = 'Board'
  }

  public display() {
    this._service.displayOverlay()
  }

  public changeView(view:String) {
    if(this.viewFlag !== view) this.viewFlag = view
  }


  public taskList =  [
    {
      taskId: 0,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        },
        {
          item_id: 1,
          item_text: "Pune"
        },
        {
          item_id: 2,
          item_text: "Navsari"
        },
        {
          item_id: 6,
          item_text: "Pune"
        },
        {
          item_id: 7,
          item_text: "Navsari"
        }
      ],
      taskTitle: "hello my new friend 1",
      taskDescription: "something here osome quick example text to build on on the card title and make up the bulk of the card's",
      taskFormType: "onprogress",
      taskEndDate: "2022-2-28",
      taskStartDate: "12/1/2022"
    },
    {
      taskId: 1,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "   Support for using the ngM",
      taskDescription: "  reactive form directives has been deprecated in Angular v6 and will be removed",
      taskFormType: "new",
      taskEndDate: "2022-3-28",
      taskStartDate: "12/2/2022"
    },
    {
      taskId: 2,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "ture version of Angula",
      taskDescription: "Angular is running in development mode. Call enableProdMode() to enable production ",
      taskFormType: "onprogress",
      taskEndDate: "2022-4-28",
      taskStartDate: "12/2/2022"
    },
    {
      taskId: 3,
      taskImage: "",
      taskTag: [
        {
          item_id: 1,
          item_text: "Mumbai"
        },
        {
          item_id: 2,
          item_text: "Bangaluru"
        }
      ],
      taskTitle: "webpack-dev-server",
      taskDescription: "Server started: Hot Module Replacement disabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
      taskFormType: "new",
      taskEndDate: "2022-5-28",
      taskStartDate: "12/3/2022"
    },
    {
      taskId: 4,
      taskImage: "",
      taskTag: [
        {
          item_id: 1,
          item_text: "Mumbai"
        },
        {
          item_id: 2,
          item_text: "Bangaluru"
        },
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        },
        {
          item_id: 5,
          item_text: "New Delhi"
        }
      ],
      taskTitle: "Angular is running",
      taskDescription: "Angular is running in development mode. Call enableProdMode() to enable production mode.",
      taskFormType: "onprogress",
      taskEndDate: "2022-8-28",
      taskStartDate: "12/5/2022"
    },
    {
      taskId: 5,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "hello my new friend",
      taskDescription: "mething here osome quick example text to build on on the card title and make up the bulk of the card's",
      taskFormType: "new",
      taskEndDate: "2022-7-28",
      taskStartDate: "12/6/2022"
    },
    {
      taskId: 6,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "sing the ngModel ",
      taskDescription: "hello my on progress friend 1 something here osome quick example text to build on on the card" ,
      taskFormType: "completed",
      taskEndDate: "2022-7-28",
      taskStartDate: "12/6/2022"
    },
    {
      taskId: 7,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        }
      ],
      taskTitle: "ture version of Angula",
      taskDescription: "llo my on review friend 1\nsomething here osome",
      taskFormType: "onreview",
      taskEndDate: "2022-8-28",
      taskStartDate: "12/7/2022"
    },
    {
      taskId: 8,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "sing the ngModel ",
      taskDescription: "It looks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future version of Angular.\n",
      taskFormType: "new",
      taskEndDate: "2022-11-28",
      taskStartDate: "12/10/2022"
    },
    {
      taskId: 9,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "webpack-dev-server",
      taskDescription: "oks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future ",
      taskFormType: "new",
      taskEndDate: "2022-12-28",
      taskStartDate: "12/10/2022"
    },
    {
      taskId: 10,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "ture version of Angula",
      taskDescription: " looks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future version of Angular.\n ",
      taskFormType: "onprogress",
      taskEndDate: "2022-12-28",
      taskStartDate: "12/11/2022"
    },
    {
      taskId: 11,
      taskImage: "",
      taskTag: [
        {
          item_id: 3,
          item_text: "Pune"
        },
        {
          item_id: 4,
          item_text: "Navsari"
        }
      ],
      taskTitle: "webpack-dev-server",
      taskDescription: "trolName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future",
      taskFormType: "onreview",
      taskEndDate: "2022-8-28",
      taskStartDate: "12/12/2022"
    }
  ]

  drop(event: CdkDragDrop<String[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // event.container.data[event.currentIndex].anyType = this.taskType[event.container.id]
      // this._tmps.nextObjData(this.taskObj)
    }
  }

}
