import { Component, Output, EventEmitter } from "@angular/core";
import { TaskService } from "../../services/task.service";

@Component({
    selector: 'app-item-filters',
    templateUrl: 'item-filters.component.html',
    styleUrls: ['item-filters.component.scss'],
    providers: [TaskService]
})

export class ItemFiltersComponent {
    filterContent: string = '';
    @Output() sort   = new EventEmitter();
    @Output() filter = new EventEmitter();

    constructor(private taskSvc: TaskService){}

    ngOnInit(): void {
    }

    filterItems(): void {
       this.taskSvc.filterItems(this.filterContent);
       this.filter.emit(this.filterContent)
    }


}