import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingDirective } from './scrolling.directive';
import { SelectorDirective } from './selector.directive';



@NgModule({
  declarations: [ ScrollingDirective, SelectorDirective ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollingDirective,
    SelectorDirective,
  ],
})
export class DirectivesModule { }
