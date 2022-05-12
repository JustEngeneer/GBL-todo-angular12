import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'mw-edit',
    templateUrl: 'mw-edit.component.html',
    styleUrls: ['mw-edit.component.scss']
})

export class MW_EditComponent{
    @Input('textEdit') textEdit: string = '';
    @Output() choiceEdit = new EventEmitter();

    clickEdit(mode: number): void{
        this.choiceEdit.emit([mode, this.textEdit]);
    }
}