import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
