import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {RidingCatsService} from '../riding-cats.service';

@Component({
  moduleId: module.id,
  selector: 'video-playlist',
  templateUrl: 'video-playlist.component.html',
   providers: [RidingCatsService]
})

export class VideoPlaylistComponent implements OnInit{
  youtubeIDs: Array<string>;

  constructor(private rcService: RidingCatsService){}

  ngOnInit():void {
    this.rcService.getVideoPlaylist().then(ids => this.youtubeIDs = ids);
  }
  
}
