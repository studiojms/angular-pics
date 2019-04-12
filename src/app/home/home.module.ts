import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login/login.page.component';
import { ValidationMessageModule } from '../shared/validation-message/validation-message.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ValidationMessageModule, RouterModule],
})
export class HomeModule {}
