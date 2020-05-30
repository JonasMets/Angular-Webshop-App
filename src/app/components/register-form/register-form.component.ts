

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { ForbiddenPasswordValidator } from 'src/app/validators/forbiddenPasswords.validators';

// services
import {RegisterUserService} from '../../services/register-user.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})


export class RegisterFormComponent implements OnInit {

// initierar variabler
  public regForm: FormGroup
  public userRoles: string[]
  public errorMsg: string

  constructor(private formBuilder: FormBuilder, private registerUserService : RegisterUserService , private http: HttpClient, private router : Router) { }


  ngOnInit(): void {

    // this.userRoles = ['User', 'SuperUser', 'Admin']
    this.userRoles = ['User', 'SuperUser']

    // initierar regForm som en FormGroup som sedan kan användas
    // i html koden med formControlName="xxxxx"
    // initierar regForm med Validators för validering
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      passWord: ['', [Validators.required, Validators.minLength(8),
         ForbiddenPasswordValidator(/password/i)]],
      confirmPassWord: ['', [Validators.required]],
      addressLine: [''],
      //  [Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]*')]]
      // zipCode: ['', [Validators.pattern('[0-9]{5}')]],
      // city: [''],
      // role: ['',[Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    },
      { validator: PasswordValidator }
    )

  }


  onSubmit() {
    console.log('submit')
    // skicka vidare data till databas
    // service eller effect ?
    const newUser ={
      firstName:this.regForm.value.firstName,
      lastName: this.regForm.value.lastName,
      email: this.regForm.value.email,
      passWord: this.regForm.value.passWord
    } 
    // console.log(newUser)

    // this.registerUserService.creatUser(newUser)

    // länk till api
    const _baseUrl: string = 'http://localhost:9999/api/v1/users/register'

    this.http.post<any>(_baseUrl,newUser).subscribe(
      res => {
        // console.log(res)
        this.regForm.reset();
        this.errorMsg = null
        // gå till någon sida
        this.router.navigate(['login']);

      },
      err => {
        console.log(err)
      this.errorMsg = 'Det gick inte att skapa användare, kontrollera uppgifter'
      }
    )

  }

}
