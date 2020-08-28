import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/giphy';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingGifs: any;

  constructor(private service: Giphy) { }



  ngOnInit(): void {
      this.service.trendingGifs()
      .subscribe(response => {
        // tslint:disable-next-line: no-string-literal
        this.trendingGifs = response['data'];
      });
  }

}
