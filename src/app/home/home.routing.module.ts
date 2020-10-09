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
      },
      {
        path: "register",
        component: SignUpPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
