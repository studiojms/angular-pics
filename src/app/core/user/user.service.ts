import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as jwtDecode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { IUser } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<IUser>(null);

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
    this.userSubject.next(user);
  }
}
