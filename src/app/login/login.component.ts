import { Component, OnInit } from '@angular/core';
import { AppFirebaseService } from '../providers/app-firebase.service';

import {MdSnackBar, MdDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private appFirebaseService : AppFirebaseService,
    private snackbar: MdSnackBar,
    private dialog: MdDialog) { }

  ngOnInit() {
  }


  login(type : number) {
    switch(type){
      case 0:{
          this.appFirebaseService.loginGoogle().then((data) =>{
              let userData = data.auth;
              this.appFirebaseService.updateProfile(userData.displayName, userData.email, userData.photoURL);
              this.snackbar.open(userData.displayName+'님 반갑습니다. 로그인에 성공하였습니다.', '확인',{ duration: 3000});
          });
          break;
      }
      case 1:{
          this.appFirebaseService.loginFacebook().then((data) =>{
              let userData = data.auth;
              this.appFirebaseService.updateProfile(userData.displayName, userData.email, userData.photoURL);
              this.snackbar.open(userData.displayName+'님 반갑습니다. 로그인에 성공하였습니다.', '확인',{ duration: 3000});
          });
          break;
      }
    }
    this.dialog.closeAll();
  }

}
