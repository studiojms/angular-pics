import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlatformDetectorService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
