import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent {

    constructor(){

    }

    ngOnInit(): void {
        console.log(1);
    }
}