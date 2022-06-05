import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegExpPatterns } from "../../shared/reg-exp.component";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [RegExpPatterns]
})

export class LoginComponent {
    public login = '';
    public password = '';
    public loginForm: FormGroup;
    public rLink = '';

    constructor(
        private _formBuilder: FormBuilder,
        private _regExpPatterns: RegExpPatterns
        ) {
            this.loginForm = _formBuilder.group({
                userEmail:    ["",[Validators.required, Validators.pattern(this._regExpPatterns.emailPattern)]],
                userPassword: ["",[Validators.required, Validators.pattern(this._regExpPatterns.passwPattern)]]
            });
        }

    ngOnSubmit(){
        console.log(111);
        //routerLink = 'todo-list'
        //this.rLink = 'todo-list';
    }
}