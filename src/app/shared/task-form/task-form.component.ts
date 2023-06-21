import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() public close: EventEmitter<any>

  @Input() public set taskForm(v : FormGroup) {
    this._taskForm = v;
  }
  public get taskForm() : FormGroup {
    return this._taskForm;
  }
  private _taskForm! : FormGroup;

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings = {};

  public selectedCar!: number;

  public cities:any = [];
  selectedCityIds!: string[];

  public cars
  constructor() {
    this.cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  this.close = new EventEmitter()
  }
  ngOnInit(): void {
    this.getData();
    this.selectAllForDropdownItems(this.getData());
  }
  
  onMaterialGroupChange(event:any) {
    console.log(event);
  }

  closeForm() {
    this.close.emit()
  }

  getData():any {
    return(this.cities = [
      { id: 1, name: 'Amar' },
      { id: 2, name: 'Akbhar' },
      { id: 3, name: 'Anthony' },
      { id: 4, name: 'BadkaG' },
      { id: 5, name: 'Baave' },
    ])
  }

  selectAllForDropdownItems(items: any[]) {
    let allSelect = (items:any) => {
      items.forEach((element:any) => {
        element['selectedAllGroup'] = 'selectedAllGroup';
      });
    };

    allSelect(items);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit() {
    // this.taskForm.value.taskFormType = this.formType;
    // this.taskForm.value.taskStartDate = new Date().toLocaleDateString()
    // this._tfps.nextFormData(this.taskForm.value)
  }

}
