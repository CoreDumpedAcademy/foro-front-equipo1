import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MessagesService } from '../services/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  ngOnInit() {

  }

  constructor(private messageService: MessagesService, private http: HttpClient ) { }

  getMessages(data) {
    this.messageService.getReceivedMsg(data.value).subscribe(() => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
    this.messageService.getSentMsg(data.value).subscribe(() => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
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
