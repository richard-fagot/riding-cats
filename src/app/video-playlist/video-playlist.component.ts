import { Component, OnInit } from '@angular/core';

import {RidingCatsService} from '../riding-cats.service';

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  providers: [RidingCatsService]
})

export class VideoPlaylistComponent implements OnInit {

  youtubeVideos: Array<Object>;

  constructor(private rcService: RidingCatsService){}

  ngOnInit():void {
    this.rcService.getVideoPlaylist().then(ids => this.youtubeVideos = ids);
  }

}
