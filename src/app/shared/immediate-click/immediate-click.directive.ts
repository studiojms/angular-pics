import { Directive, ElementRef, OnInit } from "@angular/core";

import { PlatformDetectorService } from "src/app/core/platformDetector/platform-detector.service";

@Directive({
  selector: "[immediateClick]",
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.platformDetector.isBrowser && this.element.nativeElement.click();
  }
}
