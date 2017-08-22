import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// v4.3.1
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PeopleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
