// 
//  loginform
// 

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { ForbiddenPasswordValidator } from 'src/app/validators/forbiddenPasswords.validators';
import { LoginUserService } from 'src/app/services/login-user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public regForm: FormGroup

  public errorMsg: string

  constructor(private formBuilder: FormBuilder, private loginUserService: LoginUserService, private http: HttpClient , private router : Router) { }


  ngOnInit(): void {


    // initierar regForm som en FormGroup som sedan kan användas
    // i html koden med formControlName="xxxxx"
    // initierar regForm med Validators för validering
    this.regForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      passWord: ['', [Validators.required, Validators.minLength(8),
      ForbiddenPasswordValidator(/password/i)]]
      //
    }
    )

  }


  onSubmit() {
    console.log('submit')
    // skicka vidare data till databas
    // service eller effect ?
    const loginUserData = {
      email: this.regForm.value.email,
      password: this.regForm.value.passWord
    }
    // console.log(loginUserData)

    // använda services för login eller bara till att skicka data till store?
    //  this.loginUserService.loginUser(loginUserData)

    // eller anropa login här ?
    // länk till api
    const _baseUrl: string = 'http://localhost:9999/api/v1/users/login'

    this.http.post<any>(_baseUrl, loginUserData).subscribe(
      res => {
        // this.regForm.setValue({email:'',passWord:''})
        this.regForm.reset();
        this.errorMsg = null
        // console.log(res.token)
        // console.log(res.user)

        // gå till service och spara data i store
        this.loginUserService.loginUser({token: res.token, user: res.user })
        // gå till någon sida
        this.router.navigate(['products']);

      },
      err => {
        console.log(err)
        this.errorMsg = 'Det gick inte att logga in, kontrollera uppgifter'
      }
    )


  }

}
