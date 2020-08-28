import { Component, OnInit } from '@angular/core';

import { GiphyService } from 'src/app/giphy.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingGifs: any;

  constructor(private service: GiphyService) { }

  ngOnInit(): void {

    this.service.trendingGifs()
    .subscribe(response => {
      // tslint:disable-next-line: no-string-literal
      this.trendingGifs = response['data'];
    });
  }

}
