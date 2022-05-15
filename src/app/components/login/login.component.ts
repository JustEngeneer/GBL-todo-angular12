import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: []
})

export class LoginComponent {

     // тип string або інші можна не вказувати коли явно ініціалізуємо змінні значеннями
    login: string = '';
    password: string = '';
    // код не використовується
    LoginWrong: string = 'login__wrong';
    storageKey: string = 'this is login, really';

    // регулярні вирази краще виносити в окремий файл
    emailRegExp: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    passwRegExp: RegExp = /^[a-zA-Z0-9._-]{8,12}$/;

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
        ) {
        this.loginForm = formBuilder.group({
            "userEmail": ["",[Validators.required, Validators.pattern(this.emailRegExp)]],
            "userPassword": ["",[Validators.required, Validators.pattern(this.passwRegExp)]]
        });
    }

    public onSubmit(event: Event){  // для відправки форми краще юзати івент ngSubmit в тегі form
      // routerLink="todo-list" краще переходити по роуту програмно
    }
}
