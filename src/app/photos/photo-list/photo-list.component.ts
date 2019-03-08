import { Component, OnInit } from '@angular/core';

import { IPhoto } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pic-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  filter: string = '';

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService.listForUser(userName).subscribe(photosData => (this.photos = photosData));
  }
}
