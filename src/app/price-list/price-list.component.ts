import { Component, OnInit } from '@angular/core';

import { PriceListService } from './price-list.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  public price$ = this.priceListService.price$;

  constructor(
    private priceListService: PriceListService
  ) { }

  ngOnInit() {
  }

}
