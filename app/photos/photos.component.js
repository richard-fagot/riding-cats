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
var PhotosComponent = (function () {
    function PhotosComponent() {
        this.openModalWindow = false;
        this.list = [
            "00162 (1500x1001).jpg",
            "00169 (1500x1000).jpg",
            "00173 (1500x1000).jpg",
            "00175 (1500x999).jpg",
            "00180 (1500x999).jpg",
            "00181 (1500x1000).jpg",
            "00182 (1500x1001).jpg",
            "00190 (1500x1001).jpg",
            "00196 (1500x1000).jpg",
            "00197 (1500x1000).jpg",
            "00198 (1500x1000).jpg",
            "00205 (1500x1000).jpg",
            "00206 (1500x1000).jpg",
            "00213 (1500x1000).jpg",
            "00218 (1500x1001).jpg",
            "00219 (1500x1000).jpg",
            "00220 (1500x1000).jpg",
            "10072016-_IGP9700-2.jpg",
            "11796360_906168519419599_1707766551244087282_n.jpg",
            "11825556_906168716086246_5039619851526901986_n.jpg",
            "11846748_906168876086230_3242464435630885259_n.jpg",
            "13339524_1150396608325196_4013251615108289879_n.jpg",
            "13607006_1163915120298552_2644834059264699465_n.jpg",
            "Al 9.jpg",
            "al photo.jpg",
            "Durfort Pascal 4.jpg",
            "Durfort pascal5.jpg",
            "IMG_1474.JPG",
            "IMG_1557.JPG",
            "IMG_1558.JPG",
            "IMG_2792.JPG",
            "IMG_2793.JPG",
            "IMG_2794.JPG",
            "IMG_2795.JPG",
            "IMG_2796.JPG",
            "IMG_2797.JPG",
            "IMG_2798.JPG",
            "IMG_2800.JPG",
            "IMG_2802.JPG",
            "IMG_2803.JPG",
            "IMG_2804.JPG",
            "IMG_2805.JPG",
            "IMG_2806.JPG",
            "IMG_2807.JPG",
            "mazamet.jpg",
            "realcroche8.jpg",
            "riding cats 3.jpg",
            "Riding Cats balance Rock&cars.jpg",
            "RocknCars2014DX7A2868.jpg",
            "RocknCars2014DX7A2916.jpg",
            "RocknCars2014DX7A3006.jpg",
            "RocknCars2014DX7A3012.jpg",
            "RocknCars2014DX7A3029.jpg",
            "RocknCars2014DX7A3106.jpg",
            "top 1.jpg",
        ];
        this.images = [];
        this.gallery = [];
    }
    PhotosComponent.prototype.ngOnInit = function () {
        var line = [];
        for (var i = 0; i < this.list.length; i++) {
            if ((i > 0) && (i % 6 === 0)) {
                this.gallery.push(line);
                line = [];
            }
            var path = '../../assets/img/gallery/' + this.list[i];
            var thumb_path = '../../assets/img/gallery/thumb_' + this.list[i];
            this.images.push({ thumb: thumb_path, img: path });
            line.push({ thumb: thumb_path, img: path });
        }
    };
    PhotosComponent.prototype.OpenImageModel = function (imageSrc, images) {
        //alert('OpenImages');
        var imageModalPointer;
        for (var i = 0; i < images.length; i++) {
            if (imageSrc === images[i].img) {
                imageModalPointer = i;
                console.log('jhhl', i);
                break;
            }
        }
        this.openModalWindow = true;
        this.images = images;
        this.imagePointer = imageModalPointer;
    };
    PhotosComponent.prototype.cancelImageModel = function () {
        this.openModalWindow = false;
    };
    PhotosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'photos',
            templateUrl: 'photos.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PhotosComponent);
    return PhotosComponent;
}());
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map