import { Component } from '@angular/core';
import { UserService } from './core/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userService: UserService) {}

  getAuthenticatedUser() {
    return this.userService.isLogged() ? this.userService.getUserName() : '';
  }
}
