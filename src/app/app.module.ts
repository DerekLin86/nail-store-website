import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentfulService } from './share/service/contentful.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
