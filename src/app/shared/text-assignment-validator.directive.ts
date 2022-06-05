import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function textNewAssignmentValdator(minTextLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const newTextIsEmpty = control.value.trim().length < minTextLength;
        return newTextIsEmpty ? {minTextLength: {value: control.value}} : null;
    };
} 

@Directive({
    selector: '[appTextNewAssignment]',
    providers: [{provide: NG_VALIDATORS, useExisting: CheckTextAssignmentDirective, multi: true}]
})

export class CheckTextAssignmentDirective implements Validator {
    @Input() minTextLength = 5;

    validate(control: AbstractControl): ValidationErrors | null {
        return textNewAssignmentValdator(this.minTextLength)(control);
    }
}