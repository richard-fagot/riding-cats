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
var ConcertsComponent = (function () {
    function ConcertsComponent() {
        this.events = [
            { year: '2017',
                events: [
                    { day: '04', month: 'AOU', title: 'Journées Coyote', location: 'Nogaro', img: '../../assets/img/events/coyote-nogaro.jpg', fbLink: '' },
                    { day: '02', month: 'JUL', title: 'Festival Country', location: 'Gragnague', img: '../../assets/img/events/country-frog.jpg', fbLink: '' },
                    { day: '20', month: 'MAI', title: 'copper city', location: 'Durfort', img: '../../assets/img/events/copper-city.jpg', fbLink: '' },
                    { day: '29', month: 'AVR', title: 'Concert Rockabilly avec "Riding Cats"', location: 'Au Barp', img: '../../assets/img/events/BNW.jpg', fbLink: '' },
                ]
            },
            { year: '2016',
                events: [
                    { day: '26', month: 'NOV', title: 'Soirée Châtaignes VIN Nouveau', location: 'Dunes', img: '../../assets/img/events/rockabilly-dancers.jpg', fbLink: 'https://www.facebook.com/events/1777856165835198/' },
                    { day: '05', month: 'NOV', title: 'Soirée américaine', location: 'Beef Saloon', img: '../../assets/img/events/soiree-americaine.jpg', fbLink: 'https://www.facebook.com/events/685902221564258/' },
                ] },
        ];
    }
    ConcertsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'concerts',
            templateUrl: 'concerts.component.html',
            styleUrls: ['concerts.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ConcertsComponent);
    return ConcertsComponent;
}());
exports.ConcertsComponent = ConcertsComponent;
//# sourceMappingURL=concerts.component.js.map