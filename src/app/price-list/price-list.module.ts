import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdToHtmlModule } from '../share/directive/md-to-html/md-to-html.module';
import { PriceListComponent } from './price-list.component';
import { PriceListService } from './price-list.service';

@NgModule({
  declarations: [PriceListComponent],
  imports: [
    CommonModule,
    MdToHtmlModule
  ],
  exports: [
    PriceListComponent
  ],
  providers: [
    PriceListService
  ]
})
export class PriceListModule { }
