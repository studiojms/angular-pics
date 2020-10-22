import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { IPhoto } from "../photo/photo";
import { AlertService } from "src/app/shared/alert/alert.service";
import { UserService } from "src/app/core/user/user.service";

@Component({
  templateUrl: "./photo-detail.component.html",
})
export class PhotoDetailComponent implements OnInit {
  photo$: Observable<IPhoto>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      (err) => {
        console.error(err);
        this.router.navigate(["not-found"]);
      }
    );
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(() => {
      this.alertService.success("Photo removed", true);
      this.router.navigate(["/photos", this.userService.getUserName()]);
    }),
      (err) => {
        console.error(err);
        this.alertService.danger("Could not delete the photo");
      };
  }

  like(photo: IPhoto) {
    this.photoService.like(photo.id).subscribe(
      (liked) => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      },
      (err) => console.error(err)
    );
  }
}
