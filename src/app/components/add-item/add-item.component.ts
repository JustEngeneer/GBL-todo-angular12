import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { newAssignmentTextValdator } from "../../shared/assignment-text-validator.directive";
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
            newAssignment: ["",[Validators.required, newAssignmentTextValdator(this.minTextLength)]]  
        });
    }

    addHandler(){
        const item = {
            id: Date.now(),
            priority: 1,
            date: Date.now(),
            textAssignment: this.textNewAssignment,
            taskDone: false
       };

        this._itemSvc.createItem(item);
        this.textNewAssignment = '';
    }    
}