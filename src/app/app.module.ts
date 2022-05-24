import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { TerminalComponent } from './views/terminal/terminal.component';
import { RegularComponent } from './views/regular/regular.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    TerminalComponent,
    RegularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
