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
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", "high", "Work", 0),
      new Task("Learn Kung Fu.", "low", "Hobby", 1),
      new Task("Rewatch all the Lord of the Rings movies.", "low", "Hobby", 2),
      new Task("Do the laundry.", "high", "Home", 3)
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
