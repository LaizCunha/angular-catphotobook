import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatphotobookComponent } from './catphotobook/catphotobook.component';

@NgModule({
  declarations: [
    AppComponent,
    CatphotobookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
