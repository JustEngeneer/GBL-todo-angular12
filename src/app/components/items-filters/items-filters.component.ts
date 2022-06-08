import { Component, Output, EventEmitter } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-items-filters',
    templateUrl: 'items-filters.component.html',
    styleUrls: ['items-filters.component.scss']
})

export class ItemsFiltersComponent {
    public sortModes = {
        sortAscending: 1,
        sortDescending: -1
    };
    public filterText = '';
    public textFilterForm: FormGroup;

    @Output() sort   = new EventEmitter();
    @Output() filter = new EventEmitter();

    constructor(
        private _formBuilder: FormBuilder
    ){
        this.textFilterForm = _formBuilder.group({
          filterText: ["",[Validators.required]]
        })
    }

    filterTextEmit(){
        this.filter.emit(this.filterText);
    }
}
