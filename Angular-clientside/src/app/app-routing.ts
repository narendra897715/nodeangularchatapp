import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {JoinroomcomponentComponent} from './joinroomcomponent.component';
import {ChatroomComponent} from './chatroom/chatroom.component'
const routes: Routes = [
  {path:'',redirectTo:'/joinroom',pathMatch:'full'},
  { path: 'joinroom', component: JoinroomcomponentComponent },
  {path:'chatroom',component : ChatroomComponent},
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  
})

export class AppRoutingModule { }