import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(input: Task[], desiredCategory: string) {
    var output: Task[] = [];
    if(desiredCategory === "All") {
      return input;
    } else {
      input.forEach(function(task) {
        if(task.category === desiredCategory) {
          output.push(task);
        }
      })
    }
    return output;
  }
}
