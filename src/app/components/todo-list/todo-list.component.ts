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
    private _item: any;

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
    requestDelete(item: any ): void{
        this._item = item;
        this.showModalRemove = true;
    }
    clickDelete(userChoice: number) {
        this.showModalRemove = false;
        if (userChoice == this.cancelSubmit.submit) this.itemSvc.deleteItem(this._item);
    }

    requestUpdate(item: any): void{
        this._item = item;
        this.textEdit = this._item.textAssignment;
        this.showModalEdit = true;
    }
    clickUpdate(params: any[]): void{
        const userChoice = params[0];
        const newText = params[1];

        this.showModalEdit = false;
        if (userChoice == this.cancelSubmit.submit) {
            this._item.textAssignment = newText;
            this.itemSvc.updateItem(this._item);
        }    
    }
}


