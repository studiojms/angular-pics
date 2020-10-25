import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoaderType } from "./loader.type";
import { startWith } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class LoaderService {
  loaderSubject = new Subject<LoaderType>();

  getLoader() {
    return this.loaderSubject
      .asObservable()
      .pipe(startWith(LoaderType.STOPPED));
  }

  start() {
    this.loaderSubject.next(LoaderType.LOADING);
  }

  stop() {
    this.loaderSubject.next(LoaderType.STOPPED);
  }
}
