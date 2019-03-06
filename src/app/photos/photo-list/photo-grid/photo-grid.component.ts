import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPhoto } from '../../photo/photo';

@Component({
  selector: 'pic-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css'],
})
export class PhotoGridComponent implements OnChanges {
  @Input()
  photos: IPhoto[] = [];

  rows: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupPhotosInColumns();
    }
  }

  private groupPhotosInColumns(): any[] {
    const newRows = [];
    const photos = this.photos;

    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }

    return newRows;
  }
}
