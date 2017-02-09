import { Component, ViewChild } from '@angular/core';
import { AppCoreService } from './providers/app-core.service';
import { AppFirebaseService } from './providers/app-firebase.service';

import {MdSidenav, MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav:MdSidenav;

  constructor(
    private appCoreService : AppCoreService,
    private appFirebaseService : AppFirebaseService,
    private snackbar: MdSnackBar
  ){}

  setRouter(path : string){
    this.sidenav.close();
    this.appCoreService.setRouter(path);
  }

  login() {
    this.appFirebaseService.loginGoogle().then((data) =>{
      this.snackbar.open(data.auth.displayName+'님 반갑습니다. 로그인에 성공하였습니다.', '확인',{ duration: 3000});
    });

  }

}