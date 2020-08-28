import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyDisplayComponent } from './giphy-display/giphy-display.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrendingComponent } from './trending/trending.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyDisplayComponent,
    NavBarComponent,
    TrendingComponent,
    LoadMoreComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
