import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'modal-dialog-remove',
    templateUrl: 'modal-dialog-remove.component.html',
    styleUrls: ['modal-dialog-remove.component.scss']
})

export class ModalDialogRemoveComponent {
    @Output() remove = new EventEmitter();

    clickRemove(userChoice: number): void{
        this.remove.emit(userChoice);
    }

}