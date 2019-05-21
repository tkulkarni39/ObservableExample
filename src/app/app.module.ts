import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObsComponent } from './obs/obs.component';
import { StreamsComponent } from './streams/streams.component';
import { SubjectComponent } from './subject/subject.component';
import { ConcatanationComponent } from './concatanation/concatanation.component';
import { ClickerComponent } from './clicker/clicker.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsComponent,
    StreamsComponent,
    SubjectComponent,
    ConcatanationComponent,
    ClickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
