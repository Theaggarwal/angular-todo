import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'temp-comp',
    template: `hi there! <template #progress> INSIDE TEMPALTE </template><temp2-comp></temp2-comp>`
})
export class TempComponent implements OnInit {
    name = 'Todos';
    newTask: string = '';
    activeTasksCount: number = 0;
    completedTasksCount: number = 0;

    @ViewChild('progress')
    template: TemplateRef<any>;

    ngOnInit(): void {
    }
}
