import { Component } from '@angular/core';

@Component({
  selector: 'app-project-file-presentation',
  templateUrl: './project-file-presentation.component.html',
  styleUrls: ['./project-file-presentation.component.scss']
})
export class ProjectFilePresentationComponent {
  public iterate: Array<number> = Array.from(Array(20).keys())
  callscroll(event:any) {
    console.log(event) 
  }
}
