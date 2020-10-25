import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { AlertModule } from "../alert/alert.module";
import { LoaderModule } from "../loader/loader.module";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, AlertModule, LoaderModule],
})
export class HeaderModule {}
