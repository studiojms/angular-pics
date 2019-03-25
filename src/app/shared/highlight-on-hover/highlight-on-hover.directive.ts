import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[picHighlightOnHover]',
})
export class HighlightOnHoverDirective {
  @Input()
  brightness = '70%';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  startHighlight() {
    this.renderer.setStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.renderer.setStyle(this.element.nativeElement, 'filter', `brightness(100%)`);
  }
}
