import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //loads libs to use commom directives (ngFor, ngIf etc)
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoGridComponent } from './photo-list/photo-grid/photo-grid.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [PhotoComponent, PhotoListComponent, PhotoGridComponent, FilterByDescriptionPipe],
})
export class PhotosModule {}
