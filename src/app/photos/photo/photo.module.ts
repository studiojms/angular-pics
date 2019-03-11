import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
})
export class PhotoModule {}
