import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";
import { Observable } from "rxjs";
import { IUser } from "src/app/core/user/user";

@Component({
  selector: "pic-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
}
