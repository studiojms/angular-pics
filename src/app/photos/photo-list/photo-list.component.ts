import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { IPhoto } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: "pic-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"],
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  filter: string = "";
  shouldLoadMore: boolean = true;
  currentPage: number = 1;
  userName: string = "";

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }

  loadPhotos() {
    this.photoService
      .listForUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = "";
        this.photos = [...this.photos, ...photos];
        this.shouldLoadMore = photos.length > 0;
      });
  }
}
