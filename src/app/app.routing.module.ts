import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { LoginPageComponent } from './home/login/login.page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'photos/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
