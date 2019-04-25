import { Injectable } from '@angular/core';

const TOKEN_KEY = 'ap-authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {
  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    if (window.localStorage) {
      window.localStorage.setItem(TOKEN_KEY, token);
    }
  }

  getToken() {
    let token = '';
    if (window.localStorage) {
      token = window.localStorage.getItem(TOKEN_KEY);
    }

    return token;
  }

  removeToken() {
    if (window.localStorage) {
      window.localStorage.removeItem(TOKEN_KEY);
    }
  }
}
