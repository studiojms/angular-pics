import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { PlatformDetectorService } from "src/app/core/platformDetector/platform-detector.service";
import { CustomMultipleWordsValidator } from "src/app/shared/validators/custom-multiple-words-validator";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { IUserData } from "./user-data";
import { SignUpService } from "./signup.service";
import { userNamePasswordCrossfieldValidator } from "./username-password-crossfield-validator";

@Component({
  templateUrl: "./signup.page.component.html",
  providers: [UserNotTakenValidatorService],
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  @ViewChild("emailInput")
  emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        fullName: [
          "",
          [
            Validators.required,
            Validators.minLength(10),
            CustomMultipleWordsValidator,
          ],
        ],
        userName: [
          "",
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern(/^[a-z_][a-z0-9_\-]/),
          ],
          this.userNotTakenValidatorService.checkUserNameTaken(),
        ],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
      },
      {
        validators: userNamePasswordCrossfieldValidator,
      }
    );
    this.setInputFocus();
  }

  setInputFocus() {
    if (this.platformDetectorService.isBrowser()) {
      this.emailInput.nativeElement.focus();
    }
  }

  signup() {
    if (this.signUpForm.valid && !this.signUpForm.pending) {
      const newUser = this.signUpForm.getRawValue() as IUserData;
      this.signUpService.signup(newUser).subscribe(
        () => this.router.navigate([""]),
        (err) => {
          console.error(err);
          this.setInputFocus();
        }
      );
    }
  }
}
