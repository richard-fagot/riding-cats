import { Component } from '@angular/core';

import { MessagesService } from '../messages-service.service';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.css']
})

export class BiographieComponent {
  messages: any;

  constructor(private messagesService: MessagesService) {
    
  }

  ngOnInit() {
     this.messagesService.messages.subscribe(msg => {this.messages = msg;});
  }

}
