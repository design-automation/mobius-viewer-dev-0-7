import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GIViewerComponent } from './gi-viewer/gi-viewer.component';
import { GIViewerModule } from './gi-viewer/gi-viewer';
import { DataService } from './gi-viewer/data/data.service';
import { DragDirective } from './directives/dragDropDirective';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DragDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    GIViewerModule
  ],
  entryComponents: [
    GIViewerComponent
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
