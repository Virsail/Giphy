import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/giphy.service';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  randomGif: any;
  constructor(private servive: GiphyService) { }



  ngOnInit(): void {
    this.servive.randomGif()
    .subscribe(response => {
      // tslint:disable-next-line: no-string-literal
      this.randomGif = response['data'];
    });
  }

}
