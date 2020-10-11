import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { PhotoDetailComponent } from "./photos/photo-detail/photo-detail.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule",
  },
  {
    path: "photos/:userName",
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  {
    path: "p/add",
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "p/:photoId",
    component: PhotoDetailComponent,
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
