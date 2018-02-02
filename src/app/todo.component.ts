import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo';
import { TodoResponse } from './model/todo-response';
import { TodoManager } from './manager/todo-manager';
import { ToDoStatus } from './enum/todo-status';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['css/todo.component.css'],
  templateUrl: 'html/todo.component.html',
})
export class TodoComponent implements OnInit {
  name = 'Todos';
  todoList: Todo[] = [];

  newTask: string = '';

  manager: TodoManager;

  status: ToDoStatus = ToDoStatus.None;
  availableStatus = ToDoStatus;

  activeTasksCount: number = 0;
  completedTasksCount: number = 0;

  ngOnInit(): void {
    this.manager = new TodoManager();
  }

  /** change mode from view to edit & vice-versa. **/
  changeMode(item: Todo, isEditMode: boolean): void {
    item.isInEditMode = isEditMode;
  }

  /** delete task */
  deleteTask(todoItem: Todo): void {
    let result = this.manager.deleteTask(todoItem);
    if (result) {
      this.getTasks();
    }
  }

  /** toggle task status from completed to active and vice-versa. */
  toggleTaskStatus(todoItem: Todo): void {
    let result = this.manager.changeTaskStatus(todoItem, !todoItem.isCompleted);
    if (result) {
      this.getTasks();
    }
  }

  /** add new task. */
  addTask(): void {
    let result = this.manager.addTask(this.newTask);
    if (result) {
      this.newTask = '';
      this.getTasks();
    }
  }

  /** delete all Completed Tasks. */
  deleteCompletedTasks(): void {
    let result = this.manager.removeTasksByStatus(ToDoStatus.Completed);
    if (result) {
      this.getTasks();
    }
  }

  /**** filter tasks by status (active/completed/all) */
  filterByStatus(status: ToDoStatus): void {
    this.status = status;
    this.getTasks();
  }

  /**** change status of all tasks */
  changeAllTasksStatus(isCompleted: boolean): void {
    let result = this.manager.changeAllTasksStatus(isCompleted ? ToDoStatus.Completed : ToDoStatus.Active);
    if (result) {
      this.getTasks();
    }
  }

  /**** get Tasks ***/
  private getTasks(): void {
    let response: TodoResponse = this.manager.getTasks(this.status);
    if (response) {
      this.todoList = response.todos;
      this.activeTasksCount = response.activeTasksCount;
      this.completedTasksCount = response.completedTasksCount;
    }
  }
}
