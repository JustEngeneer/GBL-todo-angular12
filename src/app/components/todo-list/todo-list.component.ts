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
    render(filterContent: string): void{
        //  the empty function for rendering the page
    }
    // filterItems(filterContent: string): void {
    //     console.log('filter items' + filterContent)
    //    this.taskSvc.filterItems(filterContent);
    // }
}


