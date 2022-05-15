import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from "../../services/task.service";

@Component({
    selector: 'app-add-item',
    templateUrl: 'add-item.component.html',
    styleUrls: ['add-item.component.scss']
})

export class AddItemComponent {
    textAssignment: string = '';
    addForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private taskSvc: TaskService
    ) {
        this.addForm = formBuilder.group({
            "itemContent": ["",[Validators.required, Validators.minLength(5)]] // "itemContent" кавички не потрібні!
        });
    }

    ngOnInit(): void { // пустий метод
    }

    add(){
        this.taskSvc.add(this.textAssignment); // немає чистки або перевірки на пробіли ! (можна додати пустий item)
        this.textAssignment = '';
    }
}
