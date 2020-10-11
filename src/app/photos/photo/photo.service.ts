import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { IPhoto } from "./photo";

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

  findById(id: string) {
    return this.http.get<IPhoto>(`http://localhost:3000/photos/${id}`);
  }
}
