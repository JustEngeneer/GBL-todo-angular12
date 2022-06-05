import { Component } from "@angular/core";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss']
})

export class TodoListComponent {
    public filterExp = '';  
    public showModalRemove = false;
    public showModalEdit = false;
    public textEdit = '';
    public cancelSubmit = {
        cancel: 0, 
        submit: 1
    };
    private _itemId = 0;

    constructor(public itemSvc: ItemService) { 
    }
    sortItems(params: any): void {
        const fieldName: string = params[0]; 
        const sortMode: number = params[1]; 

        this.itemSvc.sortItems(fieldName, sortMode);
    }

    filterItems(filterContent: string): void{
        this.filterExp = filterContent;
    }

    requestRemove(itemId: number ): void{
        this._itemId = itemId;
        this.showModalRemove = true;
    }
    clickRemove(userChoice: number) {
        this.showModalRemove = false;
        if (userChoice == this.cancelSubmit.submit) this.itemSvc.deleteItem(this._itemId);
    }

    requestEdit(params: any[]): void{
        this._itemId = params[0];
        this.textEdit = params[1];
        this.showModalEdit = true;
    }
    clickEdit(params: any[]): void{
        const userChoice = params[0];
        const newText = params[1];

        this.showModalEdit = false;

        if (userChoice == this.cancelSubmit.submit) {
            this.itemSvc.updateItem(this._itemId, newText);
        }    
    }
}


