import { Component, OnInit } from '@angular/core';
import { Giphy } from 'src/app/giphy';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  randomGif: any;


  constructor(private service: Giphy) { }

  ngOnInit(): void {

    this.service.randomGif()
    .subscribe(response => {
      // tslint:disable-next-line: no-string-literal
      this.randomGif = response['data'];
    });
  }

}
