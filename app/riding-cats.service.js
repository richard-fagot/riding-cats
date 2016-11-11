"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var RidingCatsService = (function () {
    function RidingCatsService() {
        this.videoPlaylist = [
            { youtubeId: "Wi94ce_N2ps", title: "Teaser" },
            { youtubeId: "UbDvJQFx2CU", title: "Brand new cadillac" },
            { youtubeId: "88UVcdiP7Bw", title: "Sleepwalk" },
            { youtubeId: "Zq4GQ44gkcg", title: "Whole lotta Shakin" },
        ];
    }
    RidingCatsService.prototype.getYoutubeID = function (id) {
        return Promise.resolve(this.videoPlaylist[id].youtubeId);
    };
    RidingCatsService.prototype.getVideoPlaylist = function () {
        return Promise.resolve(this.videoPlaylist);
    };
    RidingCatsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RidingCatsService);
    return RidingCatsService;
}());
exports.RidingCatsService = RidingCatsService;
//# sourceMappingURL=riding-cats.service.js.map