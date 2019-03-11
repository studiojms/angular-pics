import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  imports: [PhotoListModule, PhotoModule],
})
export class PhotosModule {}
