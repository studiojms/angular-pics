import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { PhotoDetailComponent } from "./photos/photo-detail/photo-detail.component";
import { GlobalErrorComponent } from "./errors/global-error/global-error.component";

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
    data: {
      title: "AngularPics - Timeline",
    },
  },
  {
    path: "p/add",
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: "AngularPics - Photo Upload",
    },
  },
  {
    path: "p/:photoId",
    component: PhotoDetailComponent,
    data: {
      title: "AngularPics - Photo Detail",
    },
  },
  {
    path: "error",
    component: GlobalErrorComponent,
    data: {
      title: "AngularPics - Error",
    },
  },
  {
    path: "not-found",
    component: NotFoundComponent,
    data: {
      title: "AngularPics - Not Found",
    },
  },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
