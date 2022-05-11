import { Component, Input, OnInit } from "@angular/core";
import { Observable }  from "rxjs";
import { TaskService } from "../../services/task.service";


@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
    items: Observable<any>;
    filterExp: string = '';  
    modalRemove: boolean = false;
    idRemove: number = 0;

    constructor(private taskSvc: TaskService) { 
        this.items = this.taskSvc.todos;
    }

    ngOnInit(): void {
    }

    sortItems(params: any): void {
        let fieldName: string = params[0]; 
        let mode: number = params[1]; 
        this.taskSvc.sortItems(fieldName, mode);
    }

    filterItems(filterContent: string): void{
        this.filterExp = filterContent;
    }

    requestRem(param: number ): void{
        this.idRemove = param;
        this.modalRemove = true;
    }

    clickRemove(mode: number) {
        this.modalRemove = false;
        if (mode == 1) this.taskSvc.remove(this.idRemove);
    }
}


