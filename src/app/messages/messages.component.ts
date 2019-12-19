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

  ngOnInit() {

  }

  constructor(private messageService: MessagesService, private http: HttpClient ) { }

}
