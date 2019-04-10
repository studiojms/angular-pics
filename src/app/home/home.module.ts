import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login/login.page.component';
import { ValidationMessageModule } from '../shared/validation-message/validation-message.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ValidationMessageModule],
})
export class HomeModule {}
