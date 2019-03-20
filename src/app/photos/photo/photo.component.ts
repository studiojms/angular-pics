import { Component, Input } from '@angular/core';

@Component({
  selector: 'pic-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent {
  @Input()
  url = '';

  @Input()
  alt = '';

  @Input()
  comments: number;

  @Input()
  likes: number;
}
