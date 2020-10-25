import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { LoaderService } from "./loader.service";

@Component({
  selector: "pic-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"],
})
export class LoaderComponent implements OnInit {
  loader$: Observable<string>;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loader$ = this.loaderService
      .getLoader()
      .pipe(map((loaderType) => loaderType.valueOf()));
  }
}
