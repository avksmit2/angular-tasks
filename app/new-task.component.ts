import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <div class="well" id="new-task">
      <h1>New Task</h1>
      <form>
        <div class="form-group">
          <label>Enter Task Description:</label>
          <input #newDescription class="form-control">
        </div>
        <div class="form-group">
          <label>Enter Task Priority:</label>
          <select #newPriority>
            <option>High</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
        </div>
        <div class="form-group">
          <label>Enter Task Category:</label>
          <select #newCategory>
            <option>Work</option>
            <option>Home</option>
            <option>Hobby</option>
          </select>
        </div>
        <div>
          <label>Enter Task ID:</label>
          <input #newId>
          <button (click)="
            addClicked(newDescription.value, newId.value);
            newDescription.value='';
            newId.value='';
          ">Add</button>
        </div>
      </form>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, priority: string, category: string, id: number) {
    var newTaskToAdd: Task = new Task(description, priority, category, id);
    this.newTaskSender.emit(newTaskToAdd);
  }

}
