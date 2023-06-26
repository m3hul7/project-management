import { Component } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

@Component({
  selector: 'app-project-timeline-presentation',
  templateUrl: './project-timeline-presentation.component.html',
  styleUrls: ['./project-timeline-presentation.component.scss']
})
export class ProjectTimelinePresentationComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, bootstrap5Plugin],
    // themeSystem: 'bootstrap5',
    // height: 'auto',
    aspectRatio: 2,
    stickyHeaderDates: true,
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      end: 'prevYear,prev,next,nextYear'
    },
    handleWindowResize: true,
    weekends: false,
    dayMaxEvents: true,
    events: [
      { title: 'Meeting', start: new Date() },
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
        title: "hello my new friend 1",
        taskDescription: "something here osome quick example text to build on on the card title and make up the bulk of the card's",
        taskFormType: "onprogress",
        start: new Date("2023-6-16"),
        end: new Date("2023-6-20"),
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
        title: "   Support for using the ngM",
        taskDescription: "  reactive form directives has been deprecated in Angular v6 and will be removed",
        taskFormType: "new",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "ture version of Angula",
        taskDescription: "Angular is running in development mode. Call enableProdMode() to enable production ",
        taskFormType: "onprogress",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "webpack-dev-server",
        taskDescription: "Server started: Hot Module Replacement disabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
        taskFormType: "new",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "Angular is running",
        taskDescription: "Angular is running in development mode. Call enableProdMode() to enable production mode.",
        taskFormType: "onprogress",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "hello my new friend",
        taskDescription: "mething here osome quick example text to build on on the card title and make up the bulk of the card's",
        taskFormType: "new",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "sing the ngModel ",
        taskDescription: "hello my on progress friend 1 something here osome quick example text to build on on the card",
        taskFormType: "completed",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "ture version of Angula",
        taskDescription: "llo my on review friend 1\nsomething here osome",
        taskFormType: "onreview",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "sing the ngModel ",
        taskDescription: "It looks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future version of Angular.\n",
        taskFormType: "new",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "webpack-dev-server",
        taskDescription: "oks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future ",
        taskFormType: "new",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "ture version of Angula",
        taskDescription: " looks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future version of Angular.\n ",
        taskFormType: "onprogress",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
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
        title: "webpack-dev-server",
        taskDescription: "trolName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future",
        taskFormType: "onreview",
        start: new Date("2023-6-15"),
        end: new Date("2023-6-20"),
      }
    ]
  };

  public taskList = [
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
      title: "hello my new friend 1",
      taskDescription: "something here osome quick example text to build on on the card title and make up the bulk of the card's",
      taskFormType: "onprogress",
      end: "2022-2-28",
      start: "12/1/2022"
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
      title: "   Support for using the ngM",
      taskDescription: "  reactive form directives has been deprecated in Angular v6 and will be removed",
      taskFormType: "new",
      end: "2022-3-28",
      start: "12/2/2022"
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
      title: "ture version of Angula",
      taskDescription: "Angular is running in development mode. Call enableProdMode() to enable production ",
      taskFormType: "onprogress",
      end: "2022-4-28",
      start: "12/2/2022"
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
      title: "webpack-dev-server",
      taskDescription: "Server started: Hot Module Replacement disabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
      taskFormType: "new",
      end: "2022-5-28",
      start: "12/3/2022"
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
      title: "Angular is running",
      taskDescription: "Angular is running in development mode. Call enableProdMode() to enable production mode.",
      taskFormType: "onprogress",
      end: "2022-8-28",
      start: "12/5/2022"
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
      title: "hello my new friend",
      taskDescription: "mething here osome quick example text to build on on the card title and make up the bulk of the card's",
      taskFormType: "new",
      end: "2022-7-28",
      start: "12/6/2022"
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
      title: "sing the ngModel ",
      taskDescription: "hello my on progress friend 1 something here osome quick example text to build on on the card",
      taskFormType: "completed",
      end: "2022-7-28",
      start: "12/6/2022"
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
      title: "ture version of Angula",
      taskDescription: "llo my on review friend 1\nsomething here osome",
      taskFormType: "onreview",
      end: "2022-8-28",
      start: "12/7/2022"
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
      title: "sing the ngModel ",
      taskDescription: "It looks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future version of Angular.\n",
      taskFormType: "new",
      end: "2022-11-28",
      start: "12/10/2022"
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
      title: "webpack-dev-server",
      taskDescription: "oks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future ",
      taskFormType: "new",
      end: "2022-12-28",
      start: "12/10/2022"
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
      title: "ture version of Angula",
      taskDescription: " looks like you're using ngModel on the same form field as formControlName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future version of Angular.\n ",
      taskFormType: "onprogress",
      end: "2022-12-28",
      start: "12/11/2022"
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
      title: "webpack-dev-server",
      taskDescription: "trolName.\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future",
      taskFormType: "onreview",
      end: "2022-8-28",
      start: "12/12/2022"
    }
  ]
}
