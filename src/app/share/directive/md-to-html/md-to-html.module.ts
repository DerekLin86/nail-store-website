import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  declarations: [
    MdToHtmlPipe
  ],
  exports: [
    MdToHtmlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class MdToHtmlModule { }
