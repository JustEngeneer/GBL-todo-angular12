import { Component } from "@angular/core";
import { Observable }  from "rxjs";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss']
})

export class TodoListComponent {
    public items: Observable<any>;
    public filterExp = '';  
    public showModalRemove = false;
    public showModalEdit = false;
    public textEdit = '';
    public cancelSubmit = {
        cancel: 0, 
        submit: 1
    };
    private _idItem = 0;

    constructor(private _itemSvc: ItemService) { 
        this.items = this._itemSvc.todos;
    }

    sortItems(params: any): void {
        const fieldName: string = params[0]; 
        const sortMode: number = params[1]; 

        this._itemSvc.sortItems(fieldName, sortMode);
    }

    filterItems(filterContent: string): void{
        this.filterExp = filterContent;
    }

    requestRemove(param: number ): void{
        this._idItem = param;
        this.showModalRemove = true;
    }
    clickRemove(userChoice: number) {
        this.showModalRemove = false;
        if (userChoice == this.cancelSubmit.submit) this._itemSvc.removeItem(this._idItem);
    }

    requestEdit(param: any[]): void{
        this._idItem = param[0];
        this.textEdit = param[1];
        this.showModalEdit = true;
    }
    clickEdit(param: any[]): void{
        const userChoice = param[0];
        const newText = param[1];

        this.showModalEdit = false;

        if (userChoice == this.cancelSubmit.submit) {
            this._itemSvc.editItem(this._idItem, newText);
        }    
    }
}


