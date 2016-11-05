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
var platform_browser_1 = require('@angular/platform-browser');
var angular2_image_popup_js_1 = require('../node_modules/angular2-image-popup/directives/angular2-image-popup/angular2-image-popup.js');
var app_component_1 = require('./app.component');
var accueil_component_1 = require('./accueil/accueil.component');
var photos_component_1 = require('./photos/photos.component');
var concerts_component_1 = require('./concerts/concerts.component');
var contact_component_1 = require('./contact/contact.component');
var videos_component_1 = require('./videos/videos.component');
var video_playlist_component_1 = require('./video-playlist/video-playlist.component');
var show_video_component_1 = require('./show-video/show-video.component');
var biographie_component_1 = require('./biographie/biographie.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent,
                accueil_component_1.AccueilComponent,
                photos_component_1.PhotosComponent,
                contact_component_1.ContactComponent,
                concerts_component_1.ConcertsComponent,
                videos_component_1.VideosComponent,
                video_playlist_component_1.VideoPlaylistComponent,
                show_video_component_1.ShowVideoComponent,
                biographie_component_1.BiographieComponent,
                angular2_image_popup_js_1.ImageModal],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map