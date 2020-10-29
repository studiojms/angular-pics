import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

import * as StackTrace from "stacktrace-js";
import { UserService } from "src/app/core/user/user.service";
import { ServerLogService } from "./server-log.service";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);

    const url = location instanceof PathLocationStrategy ? location.path() : "";

    console.error("Error occurred");

    if (environment.production) {
      router.navigate(["/error"]);
    }

    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames.map((sf) => sf.toString()).join("\n");
      console.error({
        message: error.message || error.toString(),
        userName: userService.getUserName(),
        url,
        stack: stackAsString,
      });

      serverLogService
        .log({
          message: error.message || error.toString(),
          userName: userService.getUserName(),
          url,
          stack: stackAsString,
        })
        .subscribe(
          () => console.log("Error logged on server"),
          (err) => {
            console.error(err);
            console.log("Failed sending log to server");
          }
        );
    });
  }
}
