import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
