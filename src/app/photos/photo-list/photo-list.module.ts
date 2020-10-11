import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoListComponent } from "./photo-list.component";
import { PhotoGridComponent } from "./photo-grid/photo-grid.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescriptionPipe } from "./filter-by-description.pipe";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "src/app/shared/card/card.module";
import { SearchModule } from "./search/search.module";
import { HighlightOnHoverModule } from "src/app/shared/highlight-on-hover/highlight-on-hover.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    PhotoModule,
    CardModule,
    SearchModule,
    HighlightOnHoverModule,
    RouterModule,
  ],
  declarations: [
    PhotoListComponent,
    PhotoGridComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
  ],
})
export class PhotoListModule {}
