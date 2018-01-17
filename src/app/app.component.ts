import { Component, OnInit } from '@angular/core';

import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  public messages: any;

  constructor(private messagesService: MessagesService) {
  }

  setLocale(locale: string): void {
    this.messagesService.setLocale(locale);
  }

  ngOnInit() {
    this.messagesService.messages.subscribe(msg => { this.setMessages(msg) });
    this.messagesService.setLocale('fr');
  }

  setMessages(msg): void {
    this.messages = msg;
  }
}
