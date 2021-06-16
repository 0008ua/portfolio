import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildDirective, ProjectComponent } from './project/project.component';
import { HomeComponent } from './home.component';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    ProjectComponent,
    HomeComponent,
    ChildDirective,
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
  ]
})

export class HomeModule { }

