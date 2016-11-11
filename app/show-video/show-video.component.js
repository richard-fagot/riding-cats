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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var riding_cats_service_1 = require('../riding-cats.service');
var ShowVideoComponent = (function () {
    function ShowVideoComponent(route, router, rcService, sanitizer) {
        this.route = route;
        this.router = router;
        this.rcService = rcService;
        this.sanitizer = sanitizer;
    }
    ShowVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.rcService.getYoutubeID(id)
                .then(function (youtubeId) { return _this.setTrustedYoutubeURL(youtubeId); });
        });
    };
    ShowVideoComponent.prototype.setTrustedYoutubeURL = function (youtubeID) {
        var untrusted = "https://www.youtube.com/embed/" + youtubeID + "?rel=0&amp;controls=1&amp;showinfo=0";
        this.youtubeURLTrusted = this.sanitizer.bypassSecurityTrustResourceUrl(untrusted);
    };
    ShowVideoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'show-video',
            templateUrl: 'show-video.component.html',
            providers: [riding_cats_service_1.RidingCatsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, riding_cats_service_1.RidingCatsService, platform_browser_1.DomSanitizer])
    ], ShowVideoComponent);
    return ShowVideoComponent;
}());
exports.ShowVideoComponent = ShowVideoComponent;
//# sourceMappingURL=show-video.component.js.map