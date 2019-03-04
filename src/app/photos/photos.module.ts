import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //loads libs to use commom directives (ngFor, ngIf etc)
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [PhotoComponent, PhotoListComponent],
})
export class PhotosModule {}
