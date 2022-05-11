import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'mw-remove',
    templateUrl: 'mw-remove.component.html',
    styleUrls: ['mw-remove.component.scss']
})

export class MW_RemoveComponent {
    @Output() choiceRemove = new EventEmitter();

    clickRemove(mode: number): void{
        this.choiceRemove.emit(mode);
    }

}