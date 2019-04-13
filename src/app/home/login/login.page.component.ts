import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platformDetector/platform-detector.service';

@Component({
  templateUrl: './login.page.component.html',
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  @ViewChild('userNameInput')
  userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName, password).subscribe(
      () => this.router.navigate(['photos', userName]),
      err => {
        this.loginForm.reset();
        if (this.platformDetectorService.isBrowser()) {
          this.userNameInput.nativeElement.focus();
        }
      }
    );
  }
}
