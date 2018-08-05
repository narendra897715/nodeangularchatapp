import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import {ChatserviceService} from './chatservice.service';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [ChatserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
