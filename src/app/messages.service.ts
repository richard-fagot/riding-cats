import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagesService {

  english = null;
  french = null;

  private msg: BehaviorSubject<any> = new BehaviorSubject(this.french);

  constructor(private http: HttpClient) { }

  get messages(): Observable<string> {
    return this.msg.asObservable();
  }

  setLocale(locale: string) {
    switch (locale) {
      case 'en':
        this.getBio('english').then(messages => this.msg.next(messages));
        break;
      default:
      this.getBio('french').then(messages => this.msg.next(messages));
    }
  }

  getBio(locale: string): Promise<any> {
    let filePath = 'assets/data/bio-french.json';

    if (locale === 'english') {
        filePath = 'assets/data/bio-english.json';
    }

    return this.http.get(filePath).toPromise();
}
}
