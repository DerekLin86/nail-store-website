import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteService } from './note.service';
import { NoteComponent } from './note.component';
import { MdToHtmlModule } from '../share/directive/md-to-html/md-to-html.module';

@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    CommonModule,
    MdToHtmlModule
  ],
  exports: [
    NoteComponent
  ],
  providers: [
    NoteService
  ]
})
export class NoteModule { }
