import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { TaskService } from "../../services/task.service";

@Component({
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss']
})

export class ItemComponent {
    @Input('id') id: number = 0; // краще передати один об'єкт в @Input а не по частинах
    @Input('priority') priority: number = 0; // краще передати один об'єкт в @Input а не по частинах
    @Input('date') date: number = Date.now(); // це значення повинно бути ініціалізоване при створення нової todo, а не тут
    @Input('textAssignment')  textAssignment: string = ''; // краще передати один об'єкт в @Input а не по частинах
    @Input('taskDone') taskDone: boolean = false; // краще передати один об'єкт в @Input а не по частинах

    @Output() requestRemove = new EventEmitter(); // requestRemove назва некоректна еміттери краще назвати remove
    @Output() requestEdit   = new EventEmitter(); // так само і тут

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
