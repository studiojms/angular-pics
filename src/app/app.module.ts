import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PhotosModule } from "./photos/photos.module";
import { AppRoutingModule } from "./app.routing.module";
import { ErrorsModule } from "./errors/errors.module";
import { HeaderModule } from "./shared/header/header.module";
import { CoreModule } from "./core/core.module";
import { FooterModule } from "./shared/footer/footer.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    HeaderModule,
    FooterModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
