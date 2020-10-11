import { NgModule } from "@angular/core";

import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoDetailModule } from "./photo-detail/photo-detail.module";

@NgModule({
  imports: [PhotoListModule, PhotoModule, PhotoFormModule, PhotoDetailModule],
})
export class PhotosModule {}
