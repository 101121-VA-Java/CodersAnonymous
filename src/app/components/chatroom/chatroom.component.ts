import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare function connect(chatroomurl: string): void;

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chatroomurl:string = environment.API_URL + '/chatroom';
    connect(chatroomurl);
  }

}
