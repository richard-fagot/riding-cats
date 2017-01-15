import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'concerts',
  templateUrl: 'concerts.component.html',
  styleUrls: ['concerts.component.css']
})

export class ConcertsComponent {
  events = [
  { year: '2017',
    events: [
      {day:'02', month:'SEP', title:'2ème Festival de Rockabilly', location:'Place de la maire, Tarbes', img:'../../assets/img/events/festival-tarbes.jpg', fbLink:''},
      {day:'04', month:'AOU', title:'Journées Coyote', location:'Nogaro', img:'../../assets/img/events/coyote-nogaro.jpg', fbLink:''},
      {day:'12', month:'JUL', title:'Enregistrement chez Sun Records !', location:'Memphis', img:'../../assets/img/events/sun-studio.jpg', fbLink:''},
      {day:'02', month:'JUL', title:'Festival Country', location:'Gragnague', img:'../../assets/img/events/country-frog.jpg', fbLink:''},
      {day:'20', month:'MAI', title:'copper city', location:'Durfort', img:'../../assets/img/events/copper-city.jpg', fbLink:'https://www.facebook.com/events/1132704173479948/'},
      {day:'29', month:'AVR', title:'Soirée Dansante', location:'Au Barp', img:'../../assets/img/events/soiree-dansante.jpg', fbLink:''},
    ]
  },
  { year:'2016',
    events: [
      {day:'26', month:'NOV', title:'Soirée Châtaignes VIN Nouveau', location:'Dunes', img:'../../assets/img/events/rockabilly-dancers.jpg', fbLink:'https://www.facebook.com/events/1777856165835198/'},
      {day:'05', month:'NOV', title:'Soirée américaine', location:'Beef Saloon', img:'../../assets/img/events/soiree-americaine.jpg', fbLink:'https://www.facebook.com/events/685902221564258/'},
    ] },
  ];
}
