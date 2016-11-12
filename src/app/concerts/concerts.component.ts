import { Component } from '@angular/core';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})

export class ConcertsComponent {

   events = [
  { year: '2017',
    events: [
      {day:'04', month:'AOU', title:'Journées Coyote', location:'Nogaro', img:'../../assets/img/events/coyote-nogaro.jpg', fbLink:''},
      {day:'02', month:'JUL', title:'Festival Country', location:'Gragnague', img:'../../assets/img/events/country-frog.jpg', fbLink:''},
      {day:'20', month:'MAI', title:'copper city', location:'Durfort', img:'../../assets/img/events/copper-city.jpg', fbLink:''},
      {day:'29', month:'AVR', title:'Concert Rockabilly avec "Riding Cats"', location:'Au Barp', img:'../../assets/img/events/BNW.jpg', fbLink:''},
    ]
  },
  { year:'2016',
    events: [
      {day:'26', month:'NOV', title:'Soirée Châtaignes VIN Nouveau', location:'Dunes', img:'../../assets/img/events/rockabilly-dancers.jpg', fbLink:'https://www.facebook.com/events/1777856165835198/'},
      {day:'05', month:'NOV', title:'Soirée américaine', location:'Beef Saloon', img:'../../assets/img/events/soiree-americaine.jpg', fbLink:'https://www.facebook.com/events/685902221564258/'},
    ] },
  ];

}
