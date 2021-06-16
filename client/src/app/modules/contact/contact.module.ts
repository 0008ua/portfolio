import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  declarations: [
    ContactComponent,

  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,

  ],
  exports: [
    ContactComponent,
  ]
})
export class ContactModule { }
