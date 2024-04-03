import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordPatternValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    const pattern: RegExp = /^(?=.*[A-Z])(?=.*\d)/;

    if (value && !pattern.test(value)) {
      return { passwordPattern: true }; 
    }

    return null; 
  };
}
