import { AbstractControl } from '@angular/forms';

export function AgeValidator( Age: AbstractControl): { [key: string]: boolean } | null {
    if (Age.value > 18) {
        return { Age: true};
    } else {
        return { Age:false };
    }

}