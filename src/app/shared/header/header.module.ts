import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { AlertModule } from "../alert/alert.module";
import { LoaderModule } from "../loader/loader.module";
import { MenuModule } from "../menu/menu.module";
import { ShowIfLoggedModule } from "../show-if-logged/show-if-logged.module";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoaderModule,
    MenuModule,
    ShowIfLoggedModule,
  ],
})
export class HeaderModule {}
