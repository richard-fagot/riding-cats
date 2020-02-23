import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Video } from './interfaces/video';
import * as Airtable from  '../assets/js/airtable.browser.js';
//declare var Airtable: any;

@Injectable()
export class RidingCatsService {
    videoPlaylist: Video[] = [
        { videoID: "LAZCS5Z4dP0", title: "Cos on the road"},
        { videoID: "rXzUgrbFKfc", title: "Kustom Decibel 2018"},
        { videoID: "vEe2oojnCgY", title: "Festival Rockabilly Tarbes" },
        { videoID: "Wi94ce_N2ps", title: "Teaser" },
        { videoID: "UbDvJQFx2CU", title: "Brand new cadillac" },
        { videoID: "88UVcdiP7Bw", title: "Sleepwalk" },
        { videoID: "Zq4GQ44gkcg", title: "Whole lotta Shakin" },
    ];

    constructor(private http: HttpClient) { }

    getYoutubeID(id: number): Promise<string> {
        return Promise.resolve(this.videoPlaylist[id].videoID);
    }

    getVideoPlaylist(): Promise<Array<Video>> {
        return Promise.resolve(this.videoPlaylist);
    }

    getConcertslist(): Promise<any> {
        return this.http.get('assets/data/concerts.json').toPromise();
    }

    getPhotoList(): Promise<any> {
        return this.http.get('assets/data/gallery.json').toPromise();
    }

    getActu(): Promise<any> {
        return this.http.get('assets/data/gallery.json').toPromise();
    }
}
