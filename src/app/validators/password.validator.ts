// 
//  password.validator.ts
// 
// custom validation class
// 

import { AbstractControl } from '@angular/forms';


export function PasswordValidator(control: AbstractControl):{[key:string]:boolean} | null{
  const password = control.get('passWord')
  const confirmpassword = control.get('confirmPassWord')

  if (password.pristine || confirmpassword.pristine ) {
    return null
  }
  return password && confirmpassword && password.value !== confirmpassword.value ? {'misMatch': true} : null
}















