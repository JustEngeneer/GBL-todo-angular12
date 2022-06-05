import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'modal-dialog-remove',
    templateUrl: 'modal-dialog-remove.component.html',
    styleUrls: ['modal-dialog-remove.component.scss']
})

export class ModalDialogRemoveComponent {
    private _modalActions = {
        cancel: 0,
        apply: 1
    };
    @Output() remove = new EventEmitter();

    apply(): void{
        this.remove.emit(this._modalActions.apply);
    }
    cancel(): void{
        this.remove.emit(this._modalActions.cancel);
    }

}