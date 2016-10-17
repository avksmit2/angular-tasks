import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'filter-task',
  template: `
      <h4 class="text-center">Filter:
        <button (click)="completedClicked()" class="btn-sm">Show Completed Tasks</button>
        <br>
        <div>
          <label>Categories</label>
          <select (change)="categoryFilter($event.target.value)">
            <option>Work</option>
            <option>Home</option>
            <option>Hobby</option>
          </select>
        </div>
      </h4>
  `
})

export class FilterTaskComponent {
  @Input() childTaskList: Task[];
  @Output() filterSender = new EventEmitter();
  completedClicked() {
    var filterCompleted = this.childTaskList;
    this.childTaskList.forEach(function(task) {
      if (task.done === true) {
        var index = filterCompleted.indexOf(task);
        filterCompleted.splice(index, 1);
      }
    });
     this.filterSender.emit(filterCompleted);
  }
  categoryFilter() {
    var filterCategories = this.childTaskList;
    this.childTaskList.forEach(function(task) {
      debugger;

      if (task.category !== "Home") {
        var index = filterCategories.indexOf(task);
        filterCategories.splice(index, 1);
      }
    });
     this.filterSender.emit(filterCategories);
  }
}
