import { Component, Input } from "@angular/core";

const IMG_API_URL = "http://localhost:3000/imgs";

@Component({
  selector: "pic-photo",
  templateUrl: "./photo.component.html",
})
export class PhotoComponent {
  private _url = "";

  @Input()
  set url(url: string) {
    if (!url.startsWith("data")) {
      this._url = `${IMG_API_URL}/${url}`;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  @Input()
  alt = "";

  @Input()
  comments: number;

  @Input()
  likes: number;
}
