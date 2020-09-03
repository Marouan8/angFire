import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  listChat: any[] = [];
  chat: Chat = {
    name: 'testName',
    message : ''
  };
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getChats()
    .subscribe(res => {this.listChat = res; });
  }

  creatNewChat() {
    this.chatService.saveChat(this.chat)
    .then(res => 
      {
        console.log(res);
        this.chat = {name: 'testName',
        message : ''
      }
      })
    .catch();
  }

}
