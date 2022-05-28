import { Component, Output, EventEmitter } from "@angular/core";

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
    public filterContent = '';
    
    @Output() sort   = new EventEmitter();
    @Output() filter = new EventEmitter();
}