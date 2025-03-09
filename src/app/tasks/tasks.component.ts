import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
//   userId: this.userId,
//   title: taskDate.title,
//   summary: taskDate.summary,
//   dueDate: taskDate.date,
// })
  @Input({ required: true}) userId!: string;
  @Input({ required: true}) name!: string;
  isAddingTask = false;

  constructor(private taskService: TasksService) {}
  
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
