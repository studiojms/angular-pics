import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { IPhoto } from "../photo/photo";

@Component({
  templateUrl: "./photo-detail.component.html",
})
export class PhotoDetailComponent implements OnInit {
  photo$: Observable<IPhoto>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }
}
