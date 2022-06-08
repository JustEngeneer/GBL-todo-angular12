import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegExpPatterns } from "../../shared/reg-exp.component";
import { Router } from "@angular/router"

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

    constructor(
        private _formBuilder: FormBuilder,
        private _regExpPatterns: RegExpPatterns,
        private _router: Router
        ) {
            this.loginForm = _formBuilder.group({
                userEmail:    ["",[Validators.required, Validators.pattern(this._regExpPatterns.emailPattern)]],
                userPassword: ["",[Validators.required, Validators.pattern(this._regExpPatterns.pswPattern)]]
            });
        }

    onSubmit(){
      this._router.navigate(['todo-list']);
    }
}
