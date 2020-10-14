import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoDetailComponent } from "./photo-detail.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comment/photo-comment.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ValidationMessageModule } from "src/app/shared/validation-message/validation-message.module";

@NgModule({
  declarations: [PhotoDetailComponent, PhotoCommentsComponent],
  exports: [PhotoDetailComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationMessageModule,
  ],
})
export class PhotoDetailModule {}
