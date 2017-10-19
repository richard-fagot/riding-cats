import { Injectable } from '@angular/core';

import { Video } from './interfaces/video'

@Injectable()
export class RidingCatsService {

    getYoutubeID(id: number): Promise<string> {
        return Promise.resolve(this.videoPlaylist[id].videoID);
    }

    getVideoPlaylist(): Promise<Array<Video>> {
        return Promise.resolve(this.videoPlaylist);
    }

    videoPlaylist: Video[] = [
        { videoID: "vEe2oojnCgY", title: "Festival Rockabilly Tarbes" },
        { videoID: "Wi94ce_N2ps", title: "Teaser" },
        { videoID: "UbDvJQFx2CU", title: "Brand new cadillac" },
        { videoID: "88UVcdiP7Bw", title: "Sleepwalk" },
        { videoID: "Zq4GQ44gkcg", title: "Whole lotta Shakin" },
    ];

}
