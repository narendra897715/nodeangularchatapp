import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import {ChatserviceService} from './chatservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { JoinroomcomponentComponent } from './joinroomcomponent.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatroomComponent } from './chatroom/chatroom.component';
import {AppRoutingModule} from './app-routing';
import {Angularmaterial} from './app-material';

@NgModule({
  declarations: [
    AppComponent,
    JoinroomcomponentComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,FlexLayoutModule,BrowserAnimationsModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [ChatserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
