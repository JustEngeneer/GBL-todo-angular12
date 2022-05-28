import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ItemService } from "../../services/item.service";

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

    @Output() remove = new EventEmitter();
    @Output() edit   = new EventEmitter(); 

    constructor(private _itemSvc: ItemService){ }

    editHandler(){
        this.edit.emit([this.id, this.textAssignment]);
    }
    doneHandler(){
        this._itemSvc.done(this.id);
    }
    removeHandler(){
        this.remove.emit(this.id);
    }
    changePriority(value: number){
        this._itemSvc.changeItemPriority(this.id, value);
    }
}