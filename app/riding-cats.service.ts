import { Injectable } from '@angular/core';

@Injectable()
export class RidingCatsService {
    getYoutubeID(id:number):Promise<string>{
        console.log("Get the element " + id + " from the playlist");
        return Promise.resolve(this.videoPlaylist[id].youtubeId);
    }

    videoPlaylist = [
        {youtubeId: "Wi94ce_N2ps"},
        {youtubeId: "UbDvJQFx2CU"},
        {youtubeId: "88UVcdiP7Bw"},
    ];
}