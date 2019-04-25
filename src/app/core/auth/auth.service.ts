import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private tokenServie: TokenService) {}

  authenticate(userName: string, password: string) {
    return this.httpClient.post(`${API_URL}/user/login`, { userName, password }, { observe: 'response' }).pipe(
      tap(res => {
        const token = res.headers.get('x-access-token');

        this.tokenServie.setToken(token);
        console.log(token);
      })
    );
  }
}
