import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type TaskInterface } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // imports: [DatePipe],
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  private taskService = inject(TasksService);
  @Input({ required: true }) task!: TaskInterface;

  onSelectComplete() {
    this.taskService.removeTask(this.task.id);
  }
}
