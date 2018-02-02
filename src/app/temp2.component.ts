import { Component, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'temp2-comp',
    template: `hi there!`
})
export class Temp2Component implements OnInit {
    name = 'Todos';
    newTask: string = '';
    activeTasksCount: number = 0;
    completedTasksCount: number = 0;

    @Input() template: TemplateRef<any>;

    constructor(private _vr: ViewContainerRef) { }

    ngOnInit(): void {
    }

    open(componetOrTemplateRef: TemplateRef<any>) {
        this._vr.createEmbeddedView(this.template);
    }
}
