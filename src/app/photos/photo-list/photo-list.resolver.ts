import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { IPhoto } from '../photo/photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>> {
  constructor(private photoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName;
    return this.photoService.listForUser(userName);
  }
}
