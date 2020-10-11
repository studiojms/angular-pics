import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotoService } from "../photo/photo.service";
import { IPhoto } from "../photo/photo";
import { Observable } from "rxjs";

@Component({
  templateUrl: "./photo-detail.component.html",
  styleUrls: ["photo-detail.css"],
})
export class PhotoDetailComponent implements OnInit {
  photo$: Observable<IPhoto>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id);
  }
}
