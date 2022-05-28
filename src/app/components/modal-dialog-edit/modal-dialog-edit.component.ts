import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'modal-dialog-edit',
    templateUrl: 'modal-dialog-edit.component.html',
    styleUrls: ['modal-dialog-edit.component.scss']
})

export class ModalDialogEditComponent{
    @Input() textEdit = '';
    @Output() edit = new EventEmitter();

    clickEdit(userChoice: number): void{
        this.edit.emit([userChoice, this.textEdit]);
    }
}