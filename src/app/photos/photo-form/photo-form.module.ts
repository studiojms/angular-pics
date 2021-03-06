import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { PhotoFormComponent } from "./photo-form.component";
import { ValidationMessageModule } from "src/app/shared/validation-message/validation-message.module";
import { RouterModule } from "@angular/router";
import { PhotoModule } from "../photo/photo.module";
import { ImmediateClickModule } from "src/app/shared/immediate-click/immediate-click.module";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
