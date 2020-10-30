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
export class AuthGuard implements CanActivate {
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

    if (!this.userService.isLogged()) {
      this.router.navigate([""], { queryParams: { fromUrl: state.url } });
      returnValue = false;
    }

    return returnValue;
  }
}
