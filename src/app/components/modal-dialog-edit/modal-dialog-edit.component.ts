import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'modal-dialog-edit',
    templateUrl: 'modal-dialog-edit.component.html',
    styleUrls: ['modal-dialog-edit.component.scss']
})

export class ModalDialogEditComponent{
    private _modalActions = {
        cancel: 0,
        save: 1
    };
    @Input() textEdit = '';
    @Output() edit = new EventEmitter();

    cancel(): void{
        this.edit.emit([this._modalActions.cancel, this.textEdit]);
    }
    save(): void{
        this.edit.emit([this._modalActions.save, this.textEdit]);
    }
}