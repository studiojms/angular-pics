import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomMultipleWordsValidator } from 'src/app/shared/validators/custom-multiple-words-validator';

@Component({
  templateUrl: './signup.page.component.html',
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(10), CustomMultipleWordsValidator]],
      userName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z_][a-z0-9_\-]/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }
}
