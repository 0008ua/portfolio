import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ChildDirective, HomeComponent } from './home.component';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ProjectComponent,
    HomeComponent,
    ChildDirective
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    HomeComponent,
  ]
})

export class HomeModule { }

