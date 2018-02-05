import { Component, OnInit } from '@angular/core';
import {RidingCatsService} from '../riding-cats.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css'],
  providers: [RidingCatsService]
})

export class ConcertsComponent implements OnInit {

  events = null;

  constructor(private rcService: RidingCatsService){}

  ngOnInit() {
    this.rcService.getConcertslist().then(concerts => this.events = concerts);
  }
}
