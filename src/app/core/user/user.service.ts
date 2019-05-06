import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as jwtDecode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { IUser } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<IUser>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as IUser;
    this.userName = user.name;

    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    //clears the username everywhere
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
