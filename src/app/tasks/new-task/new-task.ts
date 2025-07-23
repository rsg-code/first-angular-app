import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredSummary = '';
  enteredTitle = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCloseClick() {
    this.close.emit();
  }

  onSubmit() {
    console.log('added 1 step');
    this.tasksService.onAddTask1(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
