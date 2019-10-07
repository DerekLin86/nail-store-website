import { Component, OnInit } from '@angular/core';

import { NoteService } from './note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public note$ = this.noteService.note$;

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
  }

}
