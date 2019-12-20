import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  users: any[];
  selected
  msg = ""
  allMessages:[] = []

  constructor(private calls: UserService) { }

  ngOnInit() {
    this.calls.getAllUsers().subscribe(response => {
      this.users = response['username']
      this.selected = this.users[0].username
      this.getUser(this.selected)
    })
  }

  getUser(newUserName) {
    this.selected = newUserName

    const data = {
      author: JSON.parse(localStorage.getItem('token'))['userData'].username,
      receiver: this.selected,
    }

    if (typeof data.receiver !== undefined) {
      this.calls.getSendedMessages(data).subscribe(msg => {
        this.allMessages = msg['messages']
      })

      this.calls.getReceivedMessages(data).subscribe(msg => {
        this.allMessages.concat(msg['messages'])
      })
    }
  }

  sendMsg() {
    const data = {
      author: JSON.parse(localStorage.getItem('token'))['userData'].username,
      receiver: this.selected,
      message: this.msg
    }

    console.log(data)
    this.calls.createMsg(data).subscribe(msg => {
      console.log(msg);
    })
  }
}
