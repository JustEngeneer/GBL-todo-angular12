import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    public login = '';
    public password = '';
    public loginForm: FormGroup;

    emailRegExp: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    passwRegExp: RegExp = /^[a-zA-Z0-9._-]{8,12}$/;


    constructor(private _formBuilder: FormBuilder) {
        this.loginForm = _formBuilder.group({
            "userEmail": ["",[Validators.required, Validators.pattern(this.emailRegExp)]],
            "userPassword": ["",[Validators.required, Validators.pattern(this.passwRegExp)]]
        });
    }

    public onSubmit(event: Event){
    }
}