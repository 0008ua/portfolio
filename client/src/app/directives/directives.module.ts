import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingDirective } from './scrolling.directive';



@NgModule({
  declarations: [ ScrollingDirective ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollingDirective
  ],
})
export class DirectivesModule { }
