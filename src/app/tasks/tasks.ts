import { Component, Input } from '@angular/core';
import { Task } from './task/task';

// import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isButtonClick = false;
  // taskList = DUMMY_TASKS;

  constructor(private tasksService: TasksService) {}

  get getTaskFromSelectedUserId() {
    return this.tasksService.getUserTask(this.userId);
  }

  onAddClick() {
    this.isButtonClick = true;
  }

  onCloseAddTask() {
    console.log('closecalled');
    this.isButtonClick = false;
  }

  // onAddTask(taskData: NewTaskInterface) {
  //   this.tasksService.onAddTask(taskData, this.userId);
  //   this.isButtonClick = false;
  // }

  // onAddTask() {}
}
