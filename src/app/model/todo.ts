export class Todo {

    task: string;
    isCompleted: boolean;
    isInEditMode: boolean;

    constructor() {
        this.task = '';
        this.isCompleted = false;
        this.isInEditMode = false;
    }
}