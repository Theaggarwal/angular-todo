import {Todo} from './todo';
export class TodoResponse {
    todos: Todo[];
    activeTasksCount: number;
    completedTasksCount: number;

    constructor() {
        this.todos = [];
        this.activeTasksCount = 0;
        this.completedTasksCount = 0;
    }
}
