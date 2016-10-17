import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1 class="text-center">Edit Task</h1>
      <div>
        <div class="form-group">
          <label>Edit Task Description:</label>
          <input [(ngModel)]="childSelectedTask.description" class="form-control">
        </div>
        <div class="form-group">
          <label>Edit Task Priority:</label>
          <select [(ngModel)]="childSelectedTask.priority">
            <option>High</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
        </div>
        <div class="form-group">
          <label>Edit Task Category:</label>
          <select [(ngModel)]="childSelectedTask.category">
            <option>Work</option>
            <option>Home</option>
            <option>Hobby</option>
          </select>
        </div>
      </div>
      <div>
        <div class="checkbox">
          <label><input type="checkbox" [(ngModel)]="childSelectedTask.done">Task Complete</label>
        </div>
        <button (click)="doneClicked()">Done Editing</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
