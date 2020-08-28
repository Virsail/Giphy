import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyDisplayComponent } from './giphy-display/giphy-display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { NavbarComponent } from './navbar/navbar.component';
import { RandomComponent } from './random/random.component';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyDisplayComponent,
    NavbarComponent,
    RandomComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
