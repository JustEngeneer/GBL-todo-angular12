import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { TaskService } from "../../services/task.service";

@Component({
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss']
})

export class ItemComponent {
    @Input('id') id: number = 0;
    @Input('priority') priority: number = 0;
    @Input('date') date: number = Date.now();
    @Input('textAssignment')  textAssignment: string = '';
    @Input('taskDone') taskDone: boolean = false;

    @Output() requestRemove = new EventEmitter();
    @Output() requestEdit   = new EventEmitter(); 

    constructor(private taskSvc: TaskService){ }

    ngOnInit(){
    }

    edit(){
        this.requestEdit.emit([this.id, this.textAssignment]);
    }
    done(){
        this.taskSvc.done(this.id);
    }
    remove(){
        this.requestRemove.emit(this.id);
    }

    changePriority(value: number){
        this.taskSvc.changePriority(this.id, value);
    }
}