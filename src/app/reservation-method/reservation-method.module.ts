import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationMethodComponent } from './reservation-method.component';
import { ReservationMethodService } from './reservation-method.service';
import { MdToHtmlModule } from '../share/directive/md-to-html/md-to-html.module';

@NgModule({
  declarations: [
    ReservationMethodComponent
  ],
  imports: [
    CommonModule,
    MdToHtmlModule
  ],
  exports: [
    ReservationMethodComponent
  ],
  providers: [
    ReservationMethodService
  ]
})
export class ReservationMethodModule { }
