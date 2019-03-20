import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/card/card.module';

@NgModule({
  imports: [HttpClientModule, CommonModule, PhotoModule, CardModule],
  declarations: [PhotoListComponent, PhotoGridComponent, LoadButtonComponent, FilterByDescriptionPipe],
})
export class PhotoListModule {}
