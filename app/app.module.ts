import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BoardComponent }  from './board.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BoardComponent, AppComponent ],
  bootstrap:    [ AppComponent, BoardComponent ]
})

export class AppModule { }
