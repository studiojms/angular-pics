import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";

import { IPhoto } from "./photo";
import { IPhotoComment } from "./photo-comment";
import { map, catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listForUser(userName: string): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`http://localhost:3000/${userName}/photos`);
  }

  listForUserPaginated(
    userName: string,
    page: number = 1
  ): Observable<IPhoto[]> {
    const params = new HttpParams().append("page", page.toString());

    return this.http.get<IPhoto[]>(`http://localhost:3000/${userName}/photos`, {
      params,
    });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("allowComments", allowComments ? "true" : "false");
    formData.append("imageFile", file);
    return this.http.post(`http://localhost:3000/photos/upload`, formData);
  }

  findById(photoId: number) {
    return this.http.get<IPhoto>(`http://localhost:3000/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<IPhotoComment[]>(
      `http://localhost:3000/photos/${photoId}/comments`
    );
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(`http://localhost:3000/photos/${photoId}/comments`, {
      commentText,
    });
  }

  removePhoto(photoId: number) {
    return this.http.delete(`http://localhost:3000/photos/${photoId}`);
  }

  like(photoId: number) {
    return this.http
      .post(
        `http://localhost:3000/photos/${photoId}/like`,
        {},
        { observe: "response" }
      )
      .pipe(map((res) => true))
      .pipe(
        catchError((err) => (err.status == 304 ? of(false) : throwError(err)))
      );
  }
}
