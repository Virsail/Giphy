import { TrendingComponent } from './trending/trending.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { GiphyDisplayComponent } from './giphy-display/giphy-display.component';

const routes: Routes = [
  {path: '', component: TrendingComponent},
  {path: 'random', component: RandomComponent},
  {path: 'search', component: GiphyDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
