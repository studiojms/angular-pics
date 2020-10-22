import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoDetailComponent } from "./photo-detail.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comment/photo-comment.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ValidationMessageModule } from "src/app/shared/validation-message/validation-message.module";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { ShowIfLoggedModule } from "src/app/shared/show-if-logged/show-if-logged.module";

@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  exports: [PhotoDetailComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    ShowIfLoggedModule,
  ],
})
export class PhotoDetailModule {}
