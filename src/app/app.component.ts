import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { IPhoto } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.listForUser('johndoe').subscribe(photosData => (this.photos = photosData));
  }
}
