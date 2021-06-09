import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyPipe } from './technology.pipe';


@NgModule({
  declarations: [
    TechnologyPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TechnologyPipe,
  ]
})
export class PipesModule { }
