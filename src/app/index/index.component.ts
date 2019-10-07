import { AfterViewInit, Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { IndexService } from './index.service';
import { ReservationMethodComponent } from '../reservation-method/reservation-method.component';
import { InformationComponent } from '../information/information.component';
import { NoteComponent } from '../note/note.component';
import { PriceListComponent } from '../price-list/price-list.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit, OnInit {
  public settings = {
    currentSelectTabElm: null as HTMLElement
  };

  public viewModelSetting = {
    tabList: this.indexService.category$,
    currentComponent: null
  };

  private componentMappingTable = {
    '預約方式': ReservationMethodComponent,
    '注意事項': NoteComponent,
    '價目表': PriceListComponent,
    '店家資訊': InformationComponent
  };

  @ViewChildren('tabItem')
  tabQueryList: QueryList<ElementRef>;

  constructor(
    private indexService: IndexService
  ) {
    this.viewModelSetting.currentComponent = ReservationMethodComponent;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initTab();
  }

  public selectTabByEvent(event: Event, label: string) {
    const targetTabElm = event.currentTarget as HTMLElement;

    this.selectTab(targetTabElm);
    this.switchComponent(label);
  }

  private switchComponent(label: string) {
    this.viewModelSetting.currentComponent = this.componentMappingTable[label];
  }

  private selectTab(targetTabElm: HTMLElement) {
    if (this.settings.currentSelectTabElm) {
      const hasActiveClass = this.settings.currentSelectTabElm.classList.contains('active');

      if (hasActiveClass) {
        this.settings.currentSelectTabElm.classList.remove('active');
      }
    }

    this.settings.currentSelectTabElm = targetTabElm;
    this.settings.currentSelectTabElm.classList.add('active');

  }

  private initTab() {
    this.tabQueryList.changes.subscribe((tabElmList) => {
      const firstTabElm = tabElmList.toArray()[0].nativeElement as HTMLElement;

      this.selectTab(firstTabElm);
    });
  }
}
