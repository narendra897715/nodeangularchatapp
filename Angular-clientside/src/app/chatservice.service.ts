import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {messagedetails} from './app.interface';
import * as moment from 'moment';
import { format } from 'util';
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
      email1.createdAt = moment(email1.createdAt).format('h:mm a');
      console.log(email1);
       this.text.push(email1);
    })
    this.socket.on('newLocationMessage',(text)=>{
        this.text.push(text);
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

   sendlocation = (position) => {
   this.socket.emit('sendlocationdetails',{'latitude':position.coords.latitude,'longitude':position.coords.longitude});
   }
   

  
}
