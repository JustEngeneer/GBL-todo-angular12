import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { textNewAssignmentValdator } from "../../shared/text-assignment-validator.directive";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-add-item',
    templateUrl: 'add-item.component.html',
    styleUrls: ['add-item.component.scss']
})

export class AddItemComponent {
    public textNewAssignment = '';
    public minTextLength = 5;
    public addForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _itemSvc: ItemService
    ) {
        this.addForm = _formBuilder.group({
            newAssignment: ["",[Validators.required, Validators.minLength(this.minTextLength), textNewAssignmentValdator(this.minTextLength)]]  
        });
    }

    addHandler(){
        this._itemSvc.createItem(this.textNewAssignment);
        this.textNewAssignment = '';
    }    
}