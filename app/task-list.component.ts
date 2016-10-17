import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show not Done</option>
    </select>
    <div>
      <label>Choose Category</label>
      <select (change)="categoryFilter($event.target.value)">
        <option>All</option>
        <option>Work</option>
        <option>Home</option>
        <option>Hobby</option>
      </select>
    </div>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
      <h3>{{ currentTask.description }}</h3>
      <h5>Priority: {{ currentTask.priority }}</h5>
      <h5>Category: {{ currentTask.category }}</h5>
      <h5>Completed: {{ currentTask.done }}</h5>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu: string) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
