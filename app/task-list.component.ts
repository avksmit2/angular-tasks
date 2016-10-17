import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div class="filterLists row">
      <h3>Filter:</h3>
      <div class="col-sm-2">
        <select (change)="onChange($event.target.value)">
          <option value="all">Show All</option>
          <option value="isDone">Show Done</option>
          <option value="notDone" selected="selected">Show not Done</option>
        </select>
      </div>
      <div class="col-sm-3">
        <label>Choose Category</label>
        <select (change)="onChangeCategory($event.target.value)">
          <option>All</option>
          <option>Work</option>
          <option>Home</option>
          <option>Hobby</option>
        </select>
      </div>
    </div>
    <div *ngFor="let currentTask of childTaskList |
      completeness:selectedCompleteness |
      category:selectedCategory">
      <h3>{{ currentTask.description }}</h3>
      <div class="row">
        <div class="col-sm-1">
          <h5>Priority: {{ currentTask.priority }}</h5>
        </div>
        <div class="col-sm-1">
          <h5>Category: {{ currentTask.category }}</h5>
        </div>
        <div class="col-sm-1">
          <h5>Completed: {{ currentTask.done }}</h5>
        </div>
      </div>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  public selectedCategory: string = "All";
  onChange(optionFromMenu: string) {
    this.selectedCompleteness = optionFromMenu;
  }
  onChangeCategory(optionFromMenu: string) {
    this.selectedCategory = optionFromMenu;
    console.log(optionFromMenu);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
