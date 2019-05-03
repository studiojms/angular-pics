import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/core/user/user.service';
import { IUser } from 'src/app/core/user/user';

@Component({
  selector: 'pic-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  user$: Observable<IUser>;
  user: IUser;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
    this.user$.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
}
