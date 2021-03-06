import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login/login.page.component';
import { ValidationMessageModule } from '../shared/validation-message/validation-message.module';
import { SignUpPageComponent } from './signup/signup.page.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
  declarations: [LoginPageComponent, SignUpPageComponent, HomeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ValidationMessageModule, RouterModule, HomeRoutingModule],
  providers: [SignUpService],
})
export class HomeModule {}
