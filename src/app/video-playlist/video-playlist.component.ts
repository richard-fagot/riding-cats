import { Component, OnInit } from '@angular/core';

import {RidingCatsService} from '../riding-cats.service';

import { Video } from '../interfaces/video';


@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  providers: [RidingCatsService]
})

export class VideoPlaylistComponent implements OnInit {

  youtubeVideos: Array<Video>;

  constructor(private rcService: RidingCatsService) {}

  ngOnInit():void {
    this.rcService.getVideoPlaylist().then(videos => this.youtubeVideos = videos);
  }

}
