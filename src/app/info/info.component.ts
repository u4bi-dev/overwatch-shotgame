import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { AppFirebaseService } from '../providers/app-firebase.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  constructor(private snackbar: MdSnackBar, private appFirebaseService : AppFirebaseService) { }

  ngOnInit() {
  }

  showMaxrecord() {
      if(!this.appFirebaseService.playerData) return this.snackbar.open('로그인 후에 조회가 가능합니다.','확인',{ duration: 1500});

      this.appFirebaseService.playerRecord.subscribe(
        data =>{
          data.map(item => {
            if(item.$key == 'time')
              this.snackbar.open('당신의 최고 기록 시간은 '+item.$value+'초 입니다.', '확인',{ duration: 1500});
          });
        }
      );
  }

  showInfo() {
      if(!this.appFirebaseService.playerData) return this.snackbar.open('로그인 후에 조회가 가능합니다.','확인',{ duration: 1500});
      
      let name = this.appFirebaseService.playerData.auth.displayName;
      let email = this.appFirebaseService.playerData.auth.email;
      
      this.snackbar.open('닉네임 : '+name+' 이메일 : '+email, '확인',{ duration: 2000});
  }
}
