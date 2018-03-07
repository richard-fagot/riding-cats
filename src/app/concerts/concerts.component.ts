import { Component, OnInit } from '@angular/core';
import {RidingCatsService} from '../riding-cats.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css'],
  providers: [RidingCatsService]
})

export class ConcertsComponent implements OnInit {

  events: any = null;

  constructor(private rcService: RidingCatsService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.rcService.getConcertslist().then(concerts => {this.events = concerts});
  }

 
}
