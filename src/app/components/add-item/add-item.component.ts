import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-add-item',
    templateUrl: 'add-item.component.html',
    styleUrls: ['add-item.component.scss']
})

export class AddItemComponent {
    public textAssignment = '';
    public addForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _itemSvc: ItemService
    ) {
        this.addForm = _formBuilder.group({
            "itemContent": ["",[Validators.required, Validators.minLength(5)]]
        });
    }

    addHandler(){
        this._itemSvc.addItem(this.textAssignment);
        this.textAssignment = '';
    }    
}