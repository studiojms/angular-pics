import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { LoginGuard } from "../core/auth/login.guard";
import { LoginPageComponent } from "./login/login.page.component";
import { SignUpPageComponent } from "./signup/signup.page.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: "",
        component: LoginPageComponent,
        data: {
          title: "AngularPics - Login",
        },
      },
      {
        path: "register",
        component: SignUpPageComponent,
        data: {
          title: "AngularPics - Sign Up",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
