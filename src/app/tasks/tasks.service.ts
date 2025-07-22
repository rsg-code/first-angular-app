import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskInterface } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  taskList = DUMMY_TASKS;

  constructor() {
    const task = localStorage.getItem('tasks');
    if (task) {
      this.taskList = JSON.parse(task);
    }
  }

  getUserTask(userId: string) {
    return this.taskList.filter((task) => task.userId === userId);
  }

  onAddTask1(taskData: NewTaskInterface, userId: string) {
    console.log('added 2 step');
    this.taskList.unshift({
      id: new Date().getTime().toString(),
      userId: userId ?? '',
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.taskList = this.taskList.filter((user) => user.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}
