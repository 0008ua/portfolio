import { TechRoutingModule } from './tech-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './tech.component';



@NgModule({
  declarations: [TechComponent],
  imports: [
    CommonModule,
    TechRoutingModule,
  ]
})
export class TechModule { }
