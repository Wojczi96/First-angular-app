import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required:true }) task!: Task;
  private taskService = inject(TasksService);

  onClickComplete() {
    this.taskService.removeTask(this.task.id)
    // this.complete.emit(this.task.id);
  }
}
