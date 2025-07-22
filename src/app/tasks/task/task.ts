import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type TaskInterface } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
