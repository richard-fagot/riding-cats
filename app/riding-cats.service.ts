import { Injectable } from '@angular/core';

@Injectable()
export class RidingCatsService {
    getYoutubeID(id:number):Promise<string>{
        return Promise.resolve(this.videoPlaylist[id].youtubeId);
    }

    getVideoPlaylist():Promise<Array<string>> {
        let ids = [];
        this.videoPlaylist.forEach(element => {
            ids.push(element);
        });
        return Promise.resolve(ids);
    }

    videoPlaylist = [
        {youtubeId: "Wi94ce_N2ps"},
        {youtubeId: "UbDvJQFx2CU"},
        {youtubeId: "88UVcdiP7Bw"},
    ];
}