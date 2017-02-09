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
      {day:'02', month:'SEP', title:'2ème Festival de Rockabilly', location:'Place de la maire, Tarbes (65)', img:'../../assets/img/events/festival-tarbes.jpg', fbLink:''},
      {day:'26', month:'AOU', title:'American Night & Day', location:'Rouffiac (81)', img:'../../assets/img/events/amarican-night-n-day.jpg', fbLink:''},
      {day:'13', month:'AOU', title:'Lyze Rock Festival', location:'Issus (31)', img:'../../assets/img/events/lyze-rock-festival.jpg', fbLink:''},
      {day:'12', month:'AOU', title:'Soirée privée', location:'Life Style', img:'../../assets/img/events/soiree-privee.jpg', fbLink:''},
      {day:'04', month:'AOU', title:'Journées Coyote', location:'Nogaro (32)', img:'../../assets/img/events/coyote-nogaro.jpg', fbLink:''},
      {day:'12', month:'JUL', title:'Enregistrement chez Sun Records !', location:'Memphis (US)', img:'../../assets/img/events/sun-studio.jpg', fbLink:''},
      {day:'02', month:'JUL', title:'Festival Country', location:'Gragnague (31)', img:'../../assets/img/events/country-frog.jpg', fbLink:'https://www.facebook.com/events/248743615574429/'},
      {day:'20', month:'MAI', title:'Copper City', location:'Durfort (81)', img:'../../assets/img/events/copper-city.jpg', fbLink:'https://www.facebook.com/events/1132704173479948/'},
      {day:'29', month:'AVR', title:'Soirée Dansante', location:'Au Barp', img:'../../assets/img/events/soiree-dansante.jpg', fbLink:'https://www.facebook.com/events/563728757155195/'},
      {day:'18', month:'MAR', title:'Soirée privée', location:'', img:'../../assets/img/events/soiree-privee.jpg', fbLink:''},
      {day:'11', month:'MAR', title:'Soirée privée', location:'', img:'../../assets/img/events/soiree-privee.jpg', fbLink:''},
    ]
  },
  { year:'2016',
    events: [
      {day:'26', month:'NOV', title:'Soirée Châtaignes VIN Nouveau', location:'Dunes', img:'../../assets/img/events/rockabilly-dancers.jpg', fbLink:'https://www.facebook.com/events/1777856165835198/'},
      {day:'05', month:'NOV', title:'Soirée américaine', location:'Beef Saloon', img:'../../assets/img/events/soiree-americaine.jpg', fbLink:'https://www.facebook.com/events/685902221564258/'},
    ] },
  ];

}
