import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss']
})

export class ItemComponent {
    @Input('item') item: any;
    @Output() remove = new EventEmitter();
    @Output() edit   = new EventEmitter(); 

    constructor(private _itemSvc: ItemService){ 
    }

    editHandler(){
        this.edit.emit(this.item);
    }
    doneHandler(){
        this._itemSvc.done(this.item);
    }
    removeHandler(){
        this.remove.emit(this.item);
    }
    changePriority(value: number){
        this._itemSvc.changeItemPriority(this.item.id, value);
    }
}