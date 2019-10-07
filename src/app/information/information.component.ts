import { Component, OnInit } from '@angular/core';

import { InformationService } from './information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public information$ = this.informationService.information$;

  constructor(
    private informationService: InformationService
  ) { }

  ngOnInit() {
  }
}
