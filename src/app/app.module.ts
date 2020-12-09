import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GIViewerComponent } from './gi-viewer/gi-viewer.component';
import { GIViewerModule } from './gi-viewer/gi-viewer';
import { DataService as GIDataService } from './gi-viewer/data/data.service';
import { DataService } from '@services';
import { DragDirective } from './directives/dragDropDirective';
import { MatIconModule } from '@angular/material/icon';
import { VIEWER_ARR, VIEWER_MOD } from './model-viewers.config';
// import { DataCesiumService } from './gi-cesium-viewer/data/data.cesium.service';

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
    ...VIEWER_MOD,
  ],
  entryComponents: [
    ...VIEWER_ARR
  ],
  providers: [ GIDataService, DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
