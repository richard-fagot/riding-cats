import { Injectable } from '@angular/core';

@Injectable()
export class RidingCatsService {
    getYoutubeID(id:number):Promise<string>{
        return Promise.resolve(this.videoPlaylist[id].youtubeId);
    }

    getVideoPlaylist():Promise<Array<Object>> {
        return Promise.resolve(this.videoPlaylist);
    }

    videoPlaylist = [
        {youtubeId: "Wi94ce_N2ps", title:"Teaser"},
        {youtubeId: "UbDvJQFx2CU", title:"Brand new cadillac"},
        {youtubeId: "88UVcdiP7Bw", title:"Sleepwalk"},
        {youtubeId: "Zq4GQ44gkcg", title:"Whole lotta Shakin"},
    ];
}