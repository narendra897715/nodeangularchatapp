import { Component,Input } from '@angular/core';
import {ChatserviceService} from './chatservice.service';
import {messagedetails} from './app.interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatserviceService]
})
export class AppComponent {
    title : messagedetails[] = [];
    
  constructor(private _chatservice : ChatserviceService){
   this.title = this._chatservice.rootscope();
  }
     
  sendmessage = (message) => {
     
     this._chatservice.sendmessagemethod(message); 
  }
}
