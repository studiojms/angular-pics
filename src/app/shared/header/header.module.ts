import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { AlertModule } from "../alert/alert.module";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, AlertModule],
})
export class HeaderModule {}
