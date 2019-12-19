import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient, private router: Router) { }

  getReceivedMsg(data) {
    return this.http.post('http://localhost:3000/message/getRecievedMsg', data);
  }

  getSentMsg(data) {
    return this.http.post('http://localhost:3000/message/getSentMsg', data);
  }

  createMsg(data) {
    return this.http.post('http://localhost:3000/message/sendMsg', data);
  }
}
