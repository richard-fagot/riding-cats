import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import {RidingCatsService} from '../riding-cats.service';

@Component({
  selector: 'show-video',
  templateUrl: 'show-video.component.html',
  providers: [RidingCatsService]
})

export class ShowVideoComponent implements OnInit {
  youtubeURLTrusted: SafeResourceUrl;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rcService: RidingCatsService,
              private sanitizer: DomSanitizer){}

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.rcService.getYoutubeID(id)
      .then(youtubeId => this.setTrustedYoutubeURL(youtubeId)); 
    });
  }

  setTrustedYoutubeURL(youtubeID):void {
    let untrusted = "https://www.youtube.com/embed/"+youtubeID+"?rel=0&amp;controls=1&amp;showinfo=0";
    this.youtubeURLTrusted = this.sanitizer.bypassSecurityTrustResourceUrl(untrusted);
  }
}
