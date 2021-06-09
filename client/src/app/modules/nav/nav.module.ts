import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
  ],
  exports: [
    NavComponent
  ],
})
export class NavModule { }
