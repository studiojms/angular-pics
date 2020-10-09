import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

import { UserService } from "../user/user.service";

@Injectable({ providedIn: "root" })
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let returnValue = true;

    if (this.userService.isLogged()) {
      //redirect to home page
      const userName = this.userService.getUserName();

      this.router.navigate(["photos", userName]);

      returnValue = false;
    }

    return returnValue;
  }
}
