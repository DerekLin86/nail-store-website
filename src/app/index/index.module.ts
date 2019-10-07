import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { IndexService } from './index.service';
import { ReservationMethodModule } from '../reservation-method/reservation-method.module';
import { ReservationMethodComponent } from '../reservation-method/reservation-method.component';
import { PriceListModule } from '../price-list/price-list.module';
import { PriceListComponent } from '../price-list/price-list.component';
import { NoteModule } from '../note/note.module';
import { NoteComponent } from '../note/note.component';
import { InformationModule } from '../information/information.module';
import { InformationComponent } from '../information/information.component';
import { MdToHtmlModule } from '../share/directive/md-to-html/md-to-html.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    InformationModule,
    MatNativeDateModule,
    MatTabsModule,
    NoteModule,
    PriceListModule,
    ReservationMethodModule,
    MdToHtmlModule
  ],
  entryComponents: [
    ReservationMethodComponent,
    PriceListComponent,
    NoteComponent,
    InformationComponent
  ],
  providers: [
    IndexService
  ]
})
export class IndexModule { }
