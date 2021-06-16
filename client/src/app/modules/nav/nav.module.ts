import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { DirectivesModule } from '../../directives/directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule,
  ],
  exports: [
    NavComponent
  ],
})
export class NavModule { }
