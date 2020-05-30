import { AbstractControl, ValidatorFn } from '@angular/forms';

//   control: AbstractControl
export function ForbiddenPasswordValidator(forbiddenName: RegExp): ValidatorFn{
  return (control: AbstractControl): {[key:string]:any} | null =>{
    const forbidden = forbiddenName.test(control.value)

    return forbidden ? {'forbiddenName': {value: control.value}}: null
  }
} 
