import {Todo} from '../model/todo';
import {TodoResponse} from '../model/todo-response';
import {ToDoStatus} from '../enum/todo-status';

export class TodoManager {
    todos: Todo[] = [];

    constructor() { }

    /**** add new Task ***/
    addTask(title: string): boolean {
        let result: boolean = false;
        if (title.trim()) {
            let todoItem: Todo = new Todo();
            todoItem.task = title.trim();
            this.todos.push(todoItem);
            result = true;
        } else {
            alert('Please enter task title.');
        }
        return result;
    }

    /**** get Tasks details ***/
    getTasks(status: ToDoStatus): TodoResponse {
        let result: TodoResponse = new TodoResponse();

        switch (status) {
            case ToDoStatus.Active:
                result.todos = this.todos.filter(todoItem => !todoItem.isCompleted);
                result.activeTasksCount = result.todos.length;
                result.completedTasksCount = this.todos.length - result.activeTasksCount;
                break;
            case ToDoStatus.Completed:
                result.todos = this.todos.filter(todoItem => todoItem.isCompleted);
                result.completedTasksCount = result.todos.length;
                result.activeTasksCount = this.todos.length - result.completedTasksCount;
                break;
            default:
                result.todos = this.todos;
                result.activeTasksCount = this.todos.filter(todoItem => !todoItem.isCompleted).length;
                result.completedTasksCount = this.todos.length - result.activeTasksCount;
                break;
        }

        return result;
    }

    /**** delete task */
    deleteTask(todoItem: Todo): boolean {
        let result: boolean = false,
            taskIndex: number = this.todos.indexOf(todoItem);

        if (taskIndex >= 0) {
            this.todos.splice(taskIndex, 1);
            result = true;
        }

        return result;
    }

    /**** change Task status ****/
    changeTaskStatus(todoItem: Todo, isCompleted: boolean): boolean {
        let result: boolean = false;

        if (todoItem) {
            todoItem.isCompleted = isCompleted;
            result = true;
        }

        return result;
    }

    /**** change status of All Tasks ****/
    changeAllTasksStatus(status: ToDoStatus): boolean {
        let result: boolean = false;
        for (var counter = 0; counter < this.todos.length; counter++) {
            this.todos[counter].isCompleted = (status === ToDoStatus.Completed);
            result = true;
        }
        return result;
    }

    /**** remove Tasks with the given Status - if none then remove all. ****/
    removeTasksByStatus(status: ToDoStatus): boolean {
        let result: boolean = false;

        if (status === ToDoStatus.None) {
            this.todos = [];
            result = true;
        } else {
            var updatedToDos: Todo[] = [];
            for (var counter = 0; counter < this.todos.length; counter++) {
                if (status === ToDoStatus.Completed && !this.todos[counter].isCompleted) {
                    updatedToDos.push(this.todos[counter]);
                    result = true;
                } else if (status === ToDoStatus.Active && this.todos[counter].isCompleted) {
                    updatedToDos.push(this.todos[counter]);
                    result = true;
                }
                result = true;
            }
            this.todos = updatedToDos;
        }
        return result;
    }
}
