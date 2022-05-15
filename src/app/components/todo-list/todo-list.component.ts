import { Component, Input, OnInit } from "@angular/core";
import { Observable }  from "rxjs";
import { TaskService } from "../../services/task.service";


@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    items: Observable<any>; // чом не використовуємо інтерфесів ???????
    filterExp: string = '';
    modalRemove: boolean = false;
    idRemove: number = 0; // idEdit можна об'єднати в одну змінну
    modalEdit: boolean = false; // цю змінну краще назвати showModalEdit
    idEdit: number = 0;
    textEdit: string = '';

    constructor(private taskSvc: TaskService) {
        this.items = this.taskSvc.todos; // this.taskSvc.todos можна відразу використовувати в шаблоні, якщо змінна сервісу буде public
    }

    ngOnInit(): void {
    }

    sortItems(params: any): void {
        let fieldName: string = params[0]; //якщо значення в змінній не змінюється тоді викор. const а не let
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

    requestEdit(param: any[]): void{
        this.idEdit = param[0];
        this.textEdit = param[1];
        this.modalEdit = true;
    }
    clickEdit(param: any[]): void{
        let mode = param[0];
        let newText = param[1];
        this.modalEdit = false;

        console.log('click procesing '+newText)

        if (mode == 1) { // що таке mode 1 ?? такі речі виносять в enum
            this.taskSvc.edit(this.idEdit, newText);
        }
    }
}


