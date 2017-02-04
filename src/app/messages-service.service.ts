import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/Rx";

import { Message } from './model/message';

@Injectable()
export class MessagesService {
  private msg: BehaviorSubject<any> = new BehaviorSubject(this.french);

  
  get messages(): Observable<string> {
    return this.msg.asObservable();
  }
  

  setLocale(locale: string) {
    switch (locale) {
      case 'en':
        this.msg.next(this.english);
        break;
      default:
        this.msg.next(this.french);
    }
  }

  english = {
    news: 'NEWS',
    bio: 'BIOGRAPHY',
    photos: 'PHOTOS',
    videos: 'VIDEOS',
    contact: 'CONTACT',
    bioText1: 'After having palyed in the rock’n’roll band <b>Charly Scooter</b> (1986 à1989) that became <b>Scooter Atomik Band</b> (1989 à 2001), <b>Pierre Dorso</b> relaunched in 2002 <b>Atomik Band III</b>.<br><br><p>Then in 2013, a Rockabilly band : <b>Riding Cats</b>.</p>',
    bioText2: 'Since then the <b>Riding Cats</b> was the back up band in 2013 for  <a href="https://youtu.be/b9EtazNlmkc"><b>Sandy Ford from "Flying Saucer"</b></a>,<p>for <a href="https://youtu.be/rS0bcuZj1Ec?list=PLGm5xu-Um8hcGVx5tSMt0bfaZZ2vaDg4x"><b>Jeannie Vincent</b></a> in 2014,</p><p>Opened for <b>Aux bonheur des Dames</b> at the festival <b>Rock &amp; Cars</b>,</p><p>And were the head lining band of the festival <b>Realcroche</b> 2016.</p>',
    bioText3: '<b>Pierre Dorso</b> founder of the band and ex guitarist of <b>Scooter</b> did open, several times, for <b>INMATES, Charly MC COY, CRAZY CAVAN</b>.',
    bioRepTitle: 'Repertoire',
    bioRep: 'Gene Vincent, Eddie Cochran, Stray Cats, Elvis Presley and original songs.',
    bioPress: '<p><b><u>Press</u></b></p><b>Guitar News</b> : 3 pages article in the April 1993 issue.',
    bioFormation: '<p><b><u>Formation</u></b></p><p>Pierre Dorso : Vocal /Lead Guitar</p><p>Fred N. : Drums Choeur</p><p>Fred C. : Double bass</p><p></p><p><b><u>Substitutes</u></b></p><p>Etienne Montastier : Drums</p><p>Eric Tantot : Double bass</p>',
    bioDisco: '<p><b><u>Discography</u></b></p><p>Two Days Recording Rockabilly</p><p>19 titles CD</p>',
  };

  french = {
    news: 'ACTUS',
    bio: 'BIOGRAPHIE',
    photos: 'PHOTOS',
    videos: 'VIDEOS',
    contact: 'CONTACT',
    bioText1: 'Après avoir joué dans le groupe rock’n’roll <b>Charly Scooter</b> ( 1986 à1989) devenu <b>Scooter Atomik Band</b> (1989 à 2001) <b>Pierre Dorso</b> a remonté en 2002 <b>Atomik Band III</b>.<br><br><p>Puis, en 2013, un groupe Rockabilly  : <b>Riding Cats</b>.</p>',
    bioText2: 'Depuis, les <b>Riding Cats</b> ont accompagné en 2013 <a href="https://youtu.be/b9EtazNlmkc"><b>Sandy Ford des "Flying Saucer"</b></a>,<p><a href="https://youtu.be/rS0bcuZj1Ec?list=PLGm5xu-Um8hcGVx5tSMt0bfaZZ2vaDg4x"><b>Jeannie Vincent</b></a> en 2014,</p><p>fait la 1ère partie de <b>Aux bonheur des Dames</b> au festival <b>Rock &amp; Cars</b>,</p><p>et sont passés en tête d’affiche au festival <b>Realcroche</b> 2016.</p>',
    bioText3: '<b>Pierre Dorso</b> fondateur du groupe et ex-guitariste de <b>Scooter</b> a fait les 1éres parties de <b>INMATES, Charly MC COY, CRAZY CAVAN</b> (à plusieurs reprises).',
    bioRepTitle: 'Répertoire',
    bioRep: 'Gene Vincent, Eddie Cochran, Stray Cats, Elvis Presley et des compositions.',
    bioPress: '<p><b><u>Presse</u></b></p><b>Guitar News</b> : article de 3 pages dans le magasine d’Avril 1993.',
    bioFormation: '<p><b><u>Formation</u></b></p><p>Pierre Dorso : Vocal /Lead Guitar</p><p>Fred N. : Drums Choeur</p><p>Fred C. : Double bass</p><p></p><p><b><u>Remplaçants</u></b></p><p>Etienne Montastier : Drums</p><p>Eric Tantot : Double bass</p>',
    bioDisco: '<p><b><u>Discographie</u></b></p><p>Two Days Recording Rockabilly</p><p>CD 19 titres</p>',
  };
}
