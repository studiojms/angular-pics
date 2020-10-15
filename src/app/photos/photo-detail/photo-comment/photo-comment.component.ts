import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { IPhotoComment } from "../../photo/photo-comment";
import { PhotoService } from "../../photo/photo.service";

@Component({
  selector: "pic-photo-comments",
  templateUrl: "./photo-comment.component.html",
  styleUrls: ["./photo-comment.component.css"],
})
export class PhotoCommentsComponent implements OnInit {
  @Input()
  photoId: number;

  commentForm: FormGroup;

  comment$: Observable<IPhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comment$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ["", Validators.maxLength(300)],
    });
  }

  save() {
    const comment = this.commentForm.get("comment").value;

    this.comment$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(
        tap(() => {
          this.commentForm.reset();
        })
      );
  }
}
