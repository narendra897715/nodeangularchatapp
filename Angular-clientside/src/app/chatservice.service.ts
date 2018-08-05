import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {messagedetails} from './app.interface'
@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
  //url = 'http://localhost:3000';
  text : messagedetails[] = []
  public socket = io('http://localhost:3000');
  constructor() {
    this.socket.on('connect',()=>{
      console.log('connected to server');
    });
    this.socket.on('newMessage',(email1)=>{
       this.text.push(email1);
    })
      this.socket.on('disconnect',()=>{
        console.log('disconnected from server');
    
    });
    
   }

rootscope() {
  return this.text;
}
  
   sendmessagemethod = (data) => {
    this.socket.emit('createMessage',{
      from :'narendravemula386@gmail.com',
      text : data,
    
    },(data)=>{
      console.log('data is',data);
    })
    
    return this.text;
    
   }
   
  
}
