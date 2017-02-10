import { Component, ViewChild } from '@angular/core';
import { AppCoreService } from './providers/app-core.service';
import { AppFirebaseService } from './providers/app-firebase.service';

import {MdSidenav, MdSnackBar, MdDialog} from '@angular/material';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav:MdSidenav;
  private userData:any;

  constructor(
    private appCoreService : AppCoreService,
    private appFirebaseService : AppFirebaseService,
    private snackbar: MdSnackBar,
    private dialog: MdDialog
  ){
    this.appFirebaseService.firebase.auth.subscribe(
      (auth) => this.userData = auth
    );
  }

  setRouter(path : string){
    this.sidenav.close();
    this.appCoreService.setRouter(path);
  }

  selectlogin() {
    this.dialog.open(LoginComponent);
  }

  logout(){
    this.appFirebaseService.logout();
    this.snackbar.open('성공적으로 로그아웃이 되었습니다.', '확인',{ duration: 3000});
  }

}