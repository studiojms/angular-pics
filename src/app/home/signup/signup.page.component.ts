import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomMultipleWordsValidator } from 'src/app/shared/validators/custom-multiple-words-validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { HttpClient } from '@angular/common/http';
import { IUserData } from './user-data';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.page.component.html',
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(10), CustomMultipleWordsValidator]],
      userName: [
        '',
        [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z_][a-z0-9_\-]/)],
        this.userNotTakenValidatorService.checkUserNameTaken(),
      ],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  signup() {
    const newUser = this.signUpForm.getRawValue() as IUserData;
    this.signUpService.signup(newUser).subscribe(
      () => this.router.navigate(['']),
      err => {
        console.error(err);
      }
    );
  }
}
