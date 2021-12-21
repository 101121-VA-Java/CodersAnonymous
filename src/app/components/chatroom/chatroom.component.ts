import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChatService } from 'src/app/services/chat.service';

declare function connect(chatroomurl: string): void;
declare function sendMessage(usrname : string): void;
declare function addMessage(msg : string): void;
declare function openChatBox(): void;

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  chatHistory? : string[];
  constructor(private ChatService: ChatService) { }

  ngOnInit(): void {
    var chatroomurl:string = environment.API_URL + '/chatroom';
    this.getHistory();
    connect(chatroomurl);
  }

  getHistory() {
    this.ChatService.getChatHistory().subscribe((response: any) => {this.chatHistory = response;     
      for (var val of this.chatHistory!) {  
        addMessage(val); 
      }
    })
    }
  
  sendMsg(){
    sendMessage(sessionStorage.getItem('username') || "Guest");
  }
  openChat(){
    openChatBox();
  }
  connectBtn() {
    var chatroomurl:string = environment.API_URL + '/chatroom';
    connect(chatroomurl);
  }


}
