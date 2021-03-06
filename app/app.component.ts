import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="text-center">My Task List</h1>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
    ></task-list>
    <div class="row well edit-new">
      <div class="col-sm-6">
        <new-task
          (newTaskSender)="addTask($event)"
        ></new-task>
      </div>
      <div class="col-sm-6">
        <edit-task
          [childSelectedTask]="selectedTask"
          (doneClickedSender)="finishedEditing()"
        ></edit-task>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", "High", "Work", 0),
      new Task("Learn Kung Fu.", "Low", "Hobby", 1),
      new Task("Rewatch all the Lord of the Rings movies.", "Low", "Hobby", 2),
      new Task("Do the laundry.", "High", "Home", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedEditTask: Task) {
    this.selectedTask = clickedEditTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
