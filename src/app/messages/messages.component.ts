import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from '../interfaces/messages';
import { MessagesService } from '../services/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessagesService, private http: HttpClient) { }

  messages: Message[];

  ngOnInit() {
    const name = localStorage.getItem('username');
    const receiverName = 'Lucas';
    const data = { username: name, receiver: receiverName };

    this.messageService.getReceivedMsg(data).subscribe((response: Message[]) => {
      response.forEach(element => {
        this.messages.push(element);
      });
    }, (err) => {
      console.log(err);
    });
    this.messageService.getSentMsg(data).subscribe((response: Message[]) => {
      response.forEach(element => {
        this.messages.push(element);
      });
    }, (err) => {
      console.log(err);
    });

    console.log(this.messages);
  }

  createMsg(data) {
    console.log(data);
    this.messageService.createMsg(data.value).subscribe(() => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
