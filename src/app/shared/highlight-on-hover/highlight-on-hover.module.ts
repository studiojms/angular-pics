import { NgModule } from '@angular/core';
import { HighlightOnHoverDirective } from './highlight-on-hover.directive';

@NgModule({
  declarations: [HighlightOnHoverDirective],
  exports: [HighlightOnHoverDirective],
})
export class HighlightOnHoverModule {}
