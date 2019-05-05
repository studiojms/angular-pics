import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
import { IUser } from 'src/app/core/user/user';

@Component({
  selector: 'pic-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  user$: Observable<IUser>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
